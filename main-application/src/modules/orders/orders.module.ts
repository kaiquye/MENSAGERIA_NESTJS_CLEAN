import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { NewOrderUsecases } from './useCases/new-order.usecases';
import { ExistsOrderUsecases } from './useCases/exists-order.usecases';
import { OrderRepository } from './repository/order.repository';
import { PrismaService } from '../../database/config.database';

@Module({
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
