import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { History } from 'src/api/history/history.entity';
import { Invoice } from 'src/api/invoice/invoice.enity';
import { Prerecord } from 'src/api/prerecord/prerecord.entity';
import { Property } from 'src/api/property/property.entity';
import { Transaction } from 'src/api/transaction/transaction.entity';
import { User } from 'src/api/user/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('DATABASE_HOST'),
      port: this.config.get<number>('DATABASE_PORT'),
      database: this.config.get<string>('DATABASE_NAME'),
      username: this.config.get<string>('DATABASE_USER'),
      password: this.config.get<string>('DATABASE_PASSWORD'),
      entities: [User, Property, History, Invoice, Transaction, Prerecord],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      synchronize: false, // never use TRUE in production!
    };
  }
}
