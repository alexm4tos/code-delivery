import { Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class RoutesGateway {
  private kafkaProducer: Producer;

  @WebSocketServer()
  server: Server;

  constructor(
    @Inject('KAFKA_SERVICE')
    private kafkaClient: ClientKafka,
  ) {
    console.log('-#-#-#-#-#-#-#-#-#-#-#-#-#');
    (async () => {
      this.kafkaProducer = await this.kafkaClient.connect();
    })();
    console.log('-#-#-#-#-#-#-#-#-#-#-#-#-#');
  }

  @SubscribeMessage('new-direction')
  handleMessage(client: Socket, payload: { routeId: string }) {
    this.kafkaProducer.send({
      topic: 'route.new-direction',
      messages: [
        {
          key: 'route.new-direction',
          value: JSON.stringify({
            routeId: payload.routeId,
            clientId: client.id,
          }),
        },
      ],
    });
  }

  async sendPosition(data: {
    clientId: string;
    routeId: string;
    positions: [number, number];
    finished: boolean;
  }) {
    const { clientId, ...rest } = data;

    const sockets = await this.server.fetchSockets();

    const clients = sockets.map((socket) => socket.id);

    if (!clients.includes(clientId)) {
      console.error(
        'Client not exists, refresh react application and resend direction again.',
      );

      return;
    }

    this.server.to(clientId).emit('new-position', rest);
  }
}
