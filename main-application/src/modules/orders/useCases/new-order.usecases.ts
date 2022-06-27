import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repository/order.repository';
import { INewOrder } from '../types/new-order.type';
import { InterfaceUseCases } from './interface.useCases';

@Injectable()
export class NewOrderUsecases implements InterfaceUseCases<INewOrder> {
  constructor(private orderRepository: OrderRepository) {}

  async execute(data: INewOrder) {
    await this.orderRepository.registerNewOrder(data);
  }
}
