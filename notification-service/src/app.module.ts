import { Module } from '@nestjs/common';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [MailerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
