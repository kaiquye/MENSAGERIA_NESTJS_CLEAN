import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repository/order.repository';
import { INewOrder } from '../types/new-order.type';

@Injectable()
export class ExistsOrderUsecases {
  constructor(private orderRepository: OrderRepository) {}

  async execute(data: INewOrder): Promise<boolean> {
    const order = await this.orderRepository.exists(data);
    return !!order;
  }
}
