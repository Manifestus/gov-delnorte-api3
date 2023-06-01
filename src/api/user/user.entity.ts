import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Property } from '../property/property.entity';
import { History } from '../history/history.entity';
import { Invoice } from '../invoice/invoice.enity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public name!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public user_cnr_id: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public email!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public password!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public country!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public municipality!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public phone!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public address!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public address2!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public token: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted = false;

  @Column({ type: 'varchar', length: 10, nullable: true })
  public role!: string;

  @Column('text', { array: true, nullable: true })
  public documents!: string[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  //Relations
  @ManyToMany(() => Property, (property) => property.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  public properties!: Property[];

  @OneToMany(() => History, (history) => history.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  public histories!: History[];

  @OneToMany(() => Invoice, (invoice) => invoice.user, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  public invoices!: Invoice[];
}
