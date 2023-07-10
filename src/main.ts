import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  console.log(process.env.PROJECT_ID);
  console.log(process.env.PRIVATE_KEY);
  console.log(process.env.CLIENT_EMAIL);
  console.log(process.env.STORAGE_MEDIA_BUCKET);
  await app.listen(port);
}
bootstrap();
