import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prerecord } from './prerecord.entity';
import { PrerecordController } from './prerecord.controller';
import { PrerecordService } from './prerecord.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prerecord])],
  controllers: [PrerecordController],
  providers: [PrerecordService],
})
export class PrerecordModule {}
