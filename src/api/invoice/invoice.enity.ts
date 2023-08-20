import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
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

  @Column({ type: 'varchar', length: 120, nullable: false })
  public issueDate!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public dueDate: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public subtotalAmount!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public taxAmount!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public totalAmount!: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted = false;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @OneToOne(() => User, (User) => User.user_cnr_id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  public user!: User;

  @OneToOne(() => Transaction, (Transaction) => Transaction.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  transaction: Transaction;

  @OneToOne(
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
