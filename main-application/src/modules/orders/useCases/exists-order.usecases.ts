import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repository/order.repository';
import { INewOrder } from '../types/new-order.type';
import { InterfaceUseCases } from './interface.useCases';

@Injectable()
export class ExistsOrderUsecases implements InterfaceUseCases<INewOrder> {
  constructor(private orderRepository: OrderRepository) {}

  async execute(data: INewOrder): Promise<boolean> {
    // essas propriedades seão destruturadas
    const order = await this.orderRepository.exists({
      OR: [{ email: data.email }],
    });
    console.log(order);
    return !!order;
  }
}
