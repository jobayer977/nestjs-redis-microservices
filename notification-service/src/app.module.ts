import { MailerModule } from './mailer/mailer.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MailerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
