import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ExistsOrderUsecases } from './useCases/exists-order.usecases';
import { NewOrderUsecases } from './useCases/new-order.usecases';

@Injectable()
export class OrdersService {
  constructor(
    private existsOrderUsecases: ExistsOrderUsecases,
    private createNewOrder: NewOrderUsecases,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    if (await this.existsOrderUsecases.execute(createOrderDto)) {
      throw new Error('testanto....');
    }
    await this.createNewOrder.execute(createOrderDto);
  }
}
