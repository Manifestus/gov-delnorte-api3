import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHistoryDto } from './history.dto';
import { History } from './history.entity';

@Injectable()
export class HistoryService {
  @InjectRepository(History)
  private readonly repository: Repository<History>;

  public getProperty(id: any): Promise<History> {
    return this.repository.findOne(id);
  }

  public getPropertys(): Promise<History[]> {
    return this.repository.find();
  }

  public createUser(body: CreateHistoryDto): Promise<History> {
    const history: History = new History();

    history.id = body.id;
    history.owner_date_of_purchase = body.owner_date_of_purchase;
    history.status = body.status;
    history.owner_date_of_purchase = body.owner_date_of_purchase;
    // history.user = body.user;

    return this.repository.save(history);
  }

  public async updateProperty(
    id: any,
    body: CreateHistoryDto,
  ): Promise<History> {
    const history = await this.repository
      .findOne({ where: { id: id } })
      .then((history) => history);

    body.id ? (history.id = body.id) : null;
    body.owner_date_of_purchase
      ? (history.owner_date_of_purchase = body.owner_date_of_purchase)
      : null;
    body.status ? (history.status = body.status) : null;
    body.owner_date_of_purchase
      ? (history.owner_date_of_purchase = body.owner_date_of_purchase)
      : null;
    // body.user ? (history.user = body.user) : null;

    return this.repository.save(history);
  }
}
