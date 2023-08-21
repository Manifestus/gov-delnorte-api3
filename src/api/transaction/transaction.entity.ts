import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { card_information } from './card.transaction';
import { terminal_information } from './terminal.transation';
import { operation_information } from './operation.transaction';
import { User } from '../user/user.entity';
import { Invoice } from '../invoice/invoice.enity';
import { Property } from '../property/property.entity';

@Entity('transaction')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'json', nullable: false })
  public card_information!: card_information;

  @Column({ type: 'json', nullable: false })
  public terminal_information!: terminal_information;

  @Column({ type: 'json', nullable: false })
  public operation_information!: operation_information;

  @ManyToOne(() => User, (User) => User.user_cnr_id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user_cnr_id: User;

  @ManyToOne(
    () => Property,
    (Property) => Property.property_id_number_national_registry,
    {
      nullable: false,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn()
  property_id_number_national_registry: Property;

  @OneToOne(() => Invoice, (Invoice) => Invoice)
  Invoice: Invoice;
}
