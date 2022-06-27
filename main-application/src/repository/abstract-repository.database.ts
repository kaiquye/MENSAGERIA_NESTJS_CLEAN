import { Repository } from './type-abstract-repository';
import { PrismaService } from '../database/config.database';
import { PrismaClient } from '@prisma/client';

export abstract class AbstractRepository<T> implements Repository<T> {
  private readonly ORM: PrismaClient;
  private readonly table_name: string;
  protected constructor(tablename: string, ORM: PrismaClient) {
    this.ORM = ORM;
    this.table_name = tablename;
  }
  create(data: T): Promise<void | T> {
    return this.ORM[this.table_name.toString()].create({ data });
  }

  delete(id: number): Promise<void> {
    return this.ORM[this.table_name.toString()].delete({ where: id });
  }

  exists(data: Partial<T> | object): Promise<T> {
    return this.ORM[this.table_name.toString()].findFirst({
      where: {
        ...data,
      },
    });
  }

  findAll(): Promise<T[]> {
    return this.ORM[this.table_name.toString()].findMany();
  }

  findOne(id: number): Promise<T[] | T> {
    return this.ORM[this.table_name.toString()].findFirst({
      where: {
        id: id,
      },
    });
  }

  update(data: Partial<T>): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
