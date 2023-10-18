import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {
  @EventPattern('order_created')
  async handleOrderCrated(data) {
    const mail = {
      to: data.customer,
      message: `Your order is crated successfully`,
    };
    console.log(mail);
  }
}
