import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BearerService } from './bearer.service';

@Module({ imports: [HttpModule], providers: [BearerService] })
export class BearerModule {}
