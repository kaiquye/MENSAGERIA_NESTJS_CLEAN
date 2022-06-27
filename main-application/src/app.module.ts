import { Module } from '@nestjs/common';
import { OrdersModule } from './modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [OrdersModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
