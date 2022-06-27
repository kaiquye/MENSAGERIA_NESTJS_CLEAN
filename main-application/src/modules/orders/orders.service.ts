import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ExistsOrderUsecases } from './useCases/exists-order.usecases';
import { NewOrderUsecases } from './useCases/new-order.usecases';
import { AppError } from './model/app-error.model';
import { MessageError } from './enums/message-error.enum';

@Injectable()
export class OrdersService {
  constructor(
    private existsOrderUsecases: ExistsOrderUsecases,
    private createNewOrder: NewOrderUsecases,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    if (await this.existsOrderUsecases.execute(createOrderDto)) {
      new AppError(MessageError.already, 409);
    }
    await this.createNewOrder.execute(createOrderDto);
  }
}
