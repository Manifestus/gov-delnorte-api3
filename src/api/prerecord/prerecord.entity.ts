import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Property } from '../property/property.entity';

@Entity('prerecord')
export class Prerecord {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public name!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public voucher!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public date!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public cost!: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted = false;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  //Relations
  @ManyToOne(
    () => Property,
    (Property) => Property.property_id_number_national_registry,
    {
      nullable: false,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  property: Property;
}
