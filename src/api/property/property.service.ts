import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
import { CreatePropertyDto } from './property.dto';

@Injectable()
export class PropertyService {
  @InjectRepository(Property)
  private readonly repository: Repository<Property>;

  public getProperty(id: any): Promise<Property> {
    return this.repository.findOne(id);
  }

  public getPropertys(): Promise<Property[]> {
    return this.repository.find();
  }

  public createUser(body: CreatePropertyDto): Promise<Property> {
    const property: Property = new Property();

    property.state = body.state;
    property.town = body.town;

    return this.repository.save(property);
  }

  public updateProperty(id: any, body: CreatePropertyDto): Promise<Property> {
    const property: Property = new Property();

    property.state = body.state;
    property.town = body.town;

    return this.repository.save(property);
  }
}
