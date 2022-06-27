import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ExistsOrderUsecases } from './useCases/exists-order.usecases';
import { NewOrderUsecases } from './useCases/new-order.usecases';
import { AppError } from './model/app-error.model';
import { MessageError } from './enums/message-error.enum';
import { ClientKafka } from '@nestjs/microservices';
import { MessageKafkaConsumerEnum } from './enums/message-kafka-consumer.enum';

/**
 * Escolhi não utilizar o padrão S do solids nesta camada de serviço, apenas no casos de usos.
 **/

@Injectable()
export class OrdersService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly producer: ClientKafka,
    private existsOrderUsecases: ExistsOrderUsecases,
    private createNewOrder: NewOrderUsecases,
  ) {}

  async onModuleInit() {
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer.close();
  }

  async create(createOrderDto: CreateOrderDto) {
    if (await this.existsOrderUsecases.execute(createOrderDto)) {
      new AppError(MessageError.already, 409);
    }
    await this.createNewOrder.execute(createOrderDto);
    return this.producer.send(MessageKafkaConsumerEnum._infos_geographical, {
      id: createOrderDto.email,
      data: {
        zip_code: createOrderDto.zip_code,
      },
    });
  }
}
