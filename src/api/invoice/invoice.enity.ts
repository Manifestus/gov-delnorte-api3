import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public currency!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public number!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public status!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public issueDate!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public dueDate: string;

  @Column({ type: 'varchar', array: true, nullable: true })
  public items!: string[];

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

  @ManyToOne(
    () => User,
    (user) => {
      user.invoices;
    },
    { nullable: true, onDelete: 'CASCADE' },
  )
  public user!: User;
}
