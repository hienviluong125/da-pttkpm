import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
