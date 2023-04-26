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
import { User } from '../user/user.entity';
import { History } from '../history/history.entity';

@Entity('property')
export class Property {
  //main
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public state!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public town!: string;

  @Column({ type: 'bigint', nullable: false })
  public latitude!: number;

  @Column({ type: 'bigint', nullable: false })
  public longitude!: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public property_address_national_registry!: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public property_picture!: string;

  //ids

  @Column({ type: 'varchar', length: 120, nullable: false })
  public property_id_number_national_registry!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public cadastral_id_number_from_national_registry!: string;

  @Column({ type: 'bigint', nullable: false })
  public id_number_municipal_record!: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public sequential_number_record!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public volume!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public sheet!: string;

  //owner

  @Column({ type: 'varchar', length: 120, nullable: false })
  public property_owners_according_deeds_municipal_records!: string;

  @Column({ type: 'bigint', nullable: false })
  public property_owners_phone_number!: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public owners_name_national_registry!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public name_on_file_municipal_taxes!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public municipal_taxes_account_number!: string;

  //construction
  @Column({ type: 'varchar', length: 120, nullable: false })
  public type_of_property!: string;

  @Column({ type: 'bigint', nullable: false })
  public total_area_deeds!: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public type_of_terrain!: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public area!: string;

  @Column({ type: 'bigint', nullable: false })
  public construction_area_owner!: number;

  @Column({ type: 'bigint', nullable: false })
  public number_floors_property!: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  public electricity_meter_number!: string;

  //paving

  @Column({ type: 'varchar', length: 120, nullable: false })
  public sidewalk_condition!: string;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_paved_street_north!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_paved_street_south!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_paved_street_east!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_paved_street_west!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_dirt_street_north!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_dirt_street_south!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_dirt_street_east!: number;

  @Column({ type: 'bigint', nullable: false })
  public lineal_meters_property_facing_dirt_street_west!: number;

  //streets
  @Column({ type: 'varchar', length: 120, nullable: false })
  public type_street_property_sits!: string;

  @Column({ type: 'bigint', nullable: false })
  public width_street_property_sits_north!: number;

  @Column({ type: 'bigint', nullable: false })
  public width_street_property_sits_south!: number;

  @Column({ type: 'bigint', nullable: false })
  public width_street_property_sits_east!: number;

  @Column({ type: 'bigint', nullable: false })
  public width_street_property_sits_west!: number;

  //property docs
  @Column({ type: 'bigint', nullable: false })
  public property_value_according_deeds!: number;

  // @Column({ type: 'boolean' })
  // public property_owners_consent_appear_private_database_commercial_purposes: boolean;

  //OPTIONAL

  //services
  @Column({ type: 'varchar', length: 120, nullable: true })
  public electricity: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public running_water: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public internet_service: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public mobil_data: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public road: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public comments: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public water_source: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public sewerage: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public electricity_provider: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public water_provider: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public internet_service_provider: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public mobil_data_provider: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public public_lights: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public trash_collection_service: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public street_cleaning_service: string;

  //taxes
  @Column({ type: 'bigint', nullable: true })
  public municipal_taxes: number;

  //weather
  @Column({ type: 'varchar', length: 120, nullable: true })
  public weather: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public altitude: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public average_temperature: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public average_rainfall: string;

  //development
  @Column({ type: 'varchar', length: 120, nullable: true })
  public developing_potential_property: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public agricultural_activity: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public type_of_agricultural_activity: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public type_of_animal_farming: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public annual_yielding: string;

  //safety
  @Column({ type: 'varchar', length: 120, nullable: true })
  public property_risks: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public safety_level_area: string;

  //proximity
  @Column({ type: 'varchar', length: 120, nullable: true })
  public proximity_education_centers: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public proximity_medical_centers: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public distance_main_city: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public distance_commercial_port: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public distance_airport: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public skilled_labor: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public unskilled_labor: string;

  //commercial
  @Column({ type: 'varchar', length: 120, nullable: true })
  public type_commercial_activity_property: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public commercial_activity_property: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public owner_property_owner_business: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public business_owner_name: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public business_registered_municipal_record: string;

  //provisional
  @Column({ type: 'bigint', nullable: true })
  public total_area_property_according_national_registry: number;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public type_deeds: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public property_reference_according_national_registry: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public property_owners_email: string;

  @Column({ type: 'bigint', nullable: true })
  public parcel_number_national_registry: number;

  @Column({ type: 'bigint', nullable: true })
  public map_number_national_registry: number;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public mortgage_according_national_registry: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public legal_impediment_sale_according_national_registry: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public coworker: string;

  @Column({ type: 'varchar', length: 120, nullable: true })
  public working_form_gather_info: string;

  //Self Created for Control

  @Column({ type: 'boolean', default: true })
  public isDeleted = false;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  //Relations
  @ManyToMany(() => User, (user) => user.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinTable()
  public owners_id!: string[];

  @OneToMany(() => History, (history) => history.id, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  public history!: History[];
}
