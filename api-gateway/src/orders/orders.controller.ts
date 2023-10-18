import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(@Inject('NOTIFICATION_SERVICE') private client: ClientProxy) {}

  @Post()
  async createOrder(
    @Body('customer') customer: string,
    @Body('orderNo') orderNo: string,
  ) {
    this.client.emit('order_created', { customer, orderNo });
    return {
      customer,
      orderNo,
    };
  }
}
