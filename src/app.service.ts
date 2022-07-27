/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apikey: string) {}

  getHello(): string {
    return `Hello World! ${this.apikey}`;
  }
}
