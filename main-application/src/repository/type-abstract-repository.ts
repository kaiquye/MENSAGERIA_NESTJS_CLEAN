interface Reader<T> {
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T | T[]>;
  exists(data: Partial<T>): Promise<T>;
}
interface Writer<T> {
  create(data: T): Promise<T | void>;
  update(data: Partial<T>): Promise<void>;
  delete(id: number): Promise<void>;
}
export type Repository<T> = Reader<T> & Writer<T>;
