import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationException } from './filters/validation-exception.filter';
import { ValidationFilter} from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties:true,
    exceptionFactory:(errors: ValidationError[]) => {
      const messages=errors.map(
        errors=> `${errors.property} has wrong value ${errors.value}
        ${Object.values(errors.constraints).join(', ')}`

      )
      return new ValidationException(messages);
    }
  }));

  await app.listen(3000);
}
bootstrap();
 