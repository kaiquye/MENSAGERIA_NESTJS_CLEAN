import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repository/order.repository';
import { INewOrder } from '../types/new-order.type';

@Injectable()
export class NewOrderUsecases {
  constructor(private orderRepository: OrderRepository) {}

  execute(data: INewOrder) {
    this.orderRepository.registerNewOrder(data);
  }
}
