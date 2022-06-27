import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { NewOrderUsecases } from './useCases/new-order.usecases';
import { ExistsOrderUsecases } from './useCases/exists-order.usecases';
import { OrderRepository } from './repository/order.repository';
import { PrismaService } from '../../database/config.database';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.clientId_account,
            brokers: [process.env.brokers],
          },
          consumer: {
            groupId: process.env.groupId_account,
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    NewOrderUsecases,
    ExistsOrderUsecases,
    OrderRepository,
    PrismaService,
  ],
})
export class OrdersModule {}
