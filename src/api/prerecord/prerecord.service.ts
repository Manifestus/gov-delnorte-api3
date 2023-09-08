import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prerecord } from './prerecord.entity';
import { CreatePrerecordDto } from './prerecord.dto';

@Injectable()
export class PrerecordService {
  @InjectRepository(Prerecord)
  private readonly repository: Repository<Prerecord>;

  public async getPrerecords(): Promise<Prerecord[]> {
    return this.repository.find();
  }

  public async getPrerocord(id: any): Promise<Prerecord[]> {
    return this.repository.find({
      relations: ['property'],
      where: { propertyId: { id: id } },
    });
  }

  public async createPrerecord(body: CreatePrerecordDto): Promise<Prerecord> {
    const prerecord: Prerecord = new Prerecord();

    prerecord.name = body.name;
    prerecord.date = body.date;
    prerecord.cost = body.cost;
    prerecord.voucher = body.voucher;

    return this.repository.save(prerecord);
  }

  public async updatePrerecord(
    id: any,
    body: CreatePrerecordDto,
  ): Promise<Prerecord> {
    const user = await this.repository
      .findOne({ where: { id: id } })
      .then((user) => user);

    body.name ? (user.name = body.name) : null;
    body.date ? (user.date = body.date) : null;
    body.cost ? (user.cost = body.cost) : null;
    body.voucher ? (user.voucher = body.voucher) : null;
    user.updatedAt = new Date();

    return this.repository.save(user);
  }
}
