import { Exceptions } from './http-error.model';

export class AppErrorModel extends Error {
  constructor(message: string, status: number) {
    super(message);
    throw new Exceptions(message, status);
  }
}
