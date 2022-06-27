import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './repository/order.repository';

@Injectable()
export class OrdersService {
  constructor(private repository: OrderRepository) {}
  create(createOrderDto: CreateOrderDto) {
    this.repository.registerNewOrder();
  }
}
