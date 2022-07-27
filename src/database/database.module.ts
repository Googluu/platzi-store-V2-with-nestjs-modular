import { Module, Global } from '@nestjs/common';

const API_KEY = '12323453';
const API_KEY_PORD = 'PROD12746ys';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PORD : API_KEY, // $env:NODE_ENV = 'prod'; npm run start:dev
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
