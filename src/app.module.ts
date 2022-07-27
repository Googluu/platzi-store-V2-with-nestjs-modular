/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/services/products.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

const API_KEY = '12323453';
const API_KEY_PORD = 'PROD12746ys';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    AppService,
    ProductsService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PORD : API_KEY, // $env:NODE_ENV = 'prod'; npm run start:dev
    }
  ],
})
export class AppModule {}
