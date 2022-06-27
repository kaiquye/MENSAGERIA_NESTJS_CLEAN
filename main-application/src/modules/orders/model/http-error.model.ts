import { HttpException, HttpStatus } from '@nestjs/common';
export class Exceptions extends HttpException {
  constructor(Message: string, HttpStatus: HttpStatus) {
    console.log(Message);
    super(Message, HttpStatus);
  }
}
