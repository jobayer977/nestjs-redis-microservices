import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  async createOrder(
    @Body('customerEmail') customerEmail: string,
    @Body('orderNo') orderNo: number,
  ) {
    this.client.emit('order_created', { customerEmail, orderNo });
    return {
      customerEmail,
      orderNo,
    };
  }
}
