export class ChatRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }

  async fetch(request) {
    const userId = request.headers.get("X-User-Id");
    const username = request.headers.get("X-Username");
    const url = new URL(request.url);
    const convoId = url.pathname.match(/^\/api\/conversations\/([^/]+)\/ws$/)?.[1];

    if (!userId || !convoId) {
      return new Response("Missing user or conversation id", { status: 400 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    // Hibernation API: the DO can be evicted from memory between messages
    // without dropping the socket. State needed on wake-up is attached here.
    this.state.acceptWebSocket(server);
    server.serializeAttachment({ userId, username, convoId });

    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws, rawMessage) {
    let data;
    try {
      data = JSON.parse(rawMessage);
    } catch {
      return; // ignore malformed messages
    }
    if (data.type !== "message" || typeof data.content !== "string" || !data.content.trim()) {
      return;
    }

    const { userId, username, convoId } = ws.deserializeAttachment();
    const content = data.content.trim().slice(0, 2000);
    const createdAt = Date.now();
    const id = crypto.randomUUID();

    await this.env.DB.prepare(
      "INSERT INTO messages (id, conversation_id, sender_id, content, created_at) VALUES (?, ?, ?, ?, ?)"
    ).bind(id, convoId, userId, content, createdAt).run();

    const payload = JSON.stringify({
      type: "message",
      senderId: userId,
      senderName: username,
      content,
      createdAt
    });

    for (const socket of this.state.getWebSockets()) {
      try {
        socket.send(payload);
      } catch {
        // socket may have gone away between getWebSockets() and send(); skip it
      }
    }
  }

  async webSocketClose(ws, code, reason, wasClean) {
    try {
      ws.close(code, reason);
    } catch {
      // already closed
    }
  }

  async webSocketError(ws, error) {
    try {
      ws.close(1011, "error");
    } catch {
      // already closed
    }
  }
}
