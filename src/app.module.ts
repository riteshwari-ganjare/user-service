import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { User } from './submodule/user-entities/src/entities/user.entity';
import { Content } from './submodule/user-entities/src/entities/content.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'riteshwari',
      database: 'social-app-db',
      entities: [User,Content],
      synchronize: true,
      logging:true,
     
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
