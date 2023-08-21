import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Transaction } from '../transaction/transaction.entity';
import { Property } from '../property/property.entity';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public number!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public status!: string;

  @Column({ type: 'bigint', nullable: false })
  public issueDate!: number;

  @Column({ type: 'bigint', nullable: true })
  public dueDate: number;

  @Column({ type: 'int', nullable: true })
  public subtotalAmount!: number;

  @Column({ type: 'int', nullable: true })
  public taxAmount!: number;

  @Column({ type: 'int', nullable: true })
  public totalAmount!: number;

  @Column({ type: 'boolean', default: false })
  public isDeleted = false;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @ManyToOne(() => User, (User) => User.user_cnr_id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public user!: User;

  @OneToOne(() => Transaction, (Transaction) => Transaction.card_information, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  transaction: Transaction;

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
