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

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 120 })
  public name!: string;

  @Column({ type: 'varchar', length: 120 })
  public user_cnr_id!: string;

  @Column({ type: 'varchar', length: 120 })
  public email!: string;

  @Column({ type: 'varchar', length: 120 })
  public password!: string;

  @Column({ type: 'boolean', default: false })
  public isDeleted = false;

  @Column({ type: 'varchar', length: 10 })
  public role!: string;

  @Column('text', { array: true, nullable: true })
  public documents!: string[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  //Relations
  @ManyToMany(() => Property, (property) => property.id)
  @JoinTable()
  public properties!: Property[];

  @OneToMany(() => History, (history) => history.id)
  public histories!: History[];
}
