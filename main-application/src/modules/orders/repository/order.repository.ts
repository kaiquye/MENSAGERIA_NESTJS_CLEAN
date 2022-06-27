import { AbstractRepository } from '../../../repository/abstract-repository.database';
import { INewOrder } from '../types/new-order.type';
import { PrismaService } from '../../../database/config.database';
import { TableNamesEnum } from '../enums/tableNames.enum';
import { StatusOdersEnum } from '../enums/status-oders.enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepository extends AbstractRepository<INewOrder> {
  constructor(private prisma: PrismaService) {
    super(TableNamesEnum.USER, prisma);
  }
  registerNewOrder(order: INewOrder): Promise<any> {
    return this.prisma.user_info.create({
      data: {
        email: order.email,
        status: StatusOdersEnum.in_progress,
        phone: order.phone,
        name: order.name,
        address_attributes: {
          create: {
            neighborhood: order.neighborhood,
            city: order.city,
            street: order.street,
            uf: order.uf,
            zip_code: order.zip_code,
          },
        },
      },
      include: {
        address_attributes: true,
      },
    });
  }
}
