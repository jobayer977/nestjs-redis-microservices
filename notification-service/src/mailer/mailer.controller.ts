import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {
  @EventPattern('order_created')
  async handleOrderCreated(data: Record<string, unknown>) {
    const mail = {
      to: data['customerEmail'],
      message: `Your order has been created. Order ID: ${data['orderNo']}`,
    };
    console.log(`Sending email to ${mail.to} with message: ${mail.message}`);
  }
}
