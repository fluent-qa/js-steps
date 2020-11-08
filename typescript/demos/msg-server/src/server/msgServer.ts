

export abstract class MessageServer<T> {
    constructor(private readonly wsServer:WebSocket.Server)
}