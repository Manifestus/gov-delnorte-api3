import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Property } from '../property/property.entity';
import { User } from '../user/user.entity';

@Entity('history')
export class History {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  // @Column({ type: 'varchar', length: 120 })
  // public fk_tax_id!: string;

  @Column({ type: 'date' })
  public owner_date_of_purchase!: Date;

  @Column({ type: 'varchar', length: 120 })
  public status!: string;

  @CreateDateColumn()
  public created_at!: Date;

  @UpdateDateColumn()
  public updated_at!: Date;

  //Relations
  @ManyToOne(
    () => Property,
    (property) => {
      property.id,
        property.owners_id,
        property.cadastral_id_number_from_national_registry;
    },
  )
  public property!: Property;

  @ManyToOne(
    () => User,
    (user) => {
      user.id;
    },
  )
  public user!: User;
}
