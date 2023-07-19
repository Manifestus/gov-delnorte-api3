import {
  IsBoolean,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePropertyDto {
  //main
  @IsString()
  @IsNotEmpty()
  public state: string;

  @IsString()
  @IsNotEmpty()
  public town: string;

  @IsString()
  @IsNotEmpty()
  public latitude: string;

  @IsString()
  @IsNotEmpty()
  public longitude: string;

  @IsString()
  @IsNotEmpty()
  public property_address_national_registry: string;

  @IsString()
  @IsNotEmpty()
  public property_address_record: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public property_picture: string;

  //ids
  @IsString()
  @IsNotEmpty()
  public owners_id: string;

  @IsString()
  @IsNotEmpty()
  public property_id_number_national_registry: string;

  @IsString()
  @IsNotEmpty()
  public cadastral_id_number_from_national_registry: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  public id_number_municipal_record: number;

  @IsString()
  @IsNotEmpty()
  public sequential_number_record: string;

  @IsString()
  @IsNotEmpty()
  public volume: string;

  @IsString()
  @IsNotEmpty()
  public sheet: string;

  //owner
  @IsString()
  @IsNotEmpty()
  public property_owners_according_deeds_municipal_records: string;

  @IsString()
  @IsNotEmpty()
  public property_owners_phone_number: string;

  @IsString()
  @IsNotEmpty()
  public owners_name_national_registry: string;

  @IsString()
  @IsNotEmpty()
  public name_on_file_municipal_taxes: string;

  @IsString()
  @IsNotEmpty()
  public municipal_taxes_account_number: string;

  //construction
  @IsString()
  @IsNotEmpty()
  public type_of_property: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  public total_area_deeds: number;

  @IsString()
  @IsNotEmpty()
  public type_of_terrain: string;

  @IsString()
  @IsNotEmpty()
  public area: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  public construction_area_owner: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  public number_floors_property: number;

  @IsString()
  @IsNotEmpty()
  public electricity_meter_number: string;

  //paving
  @IsString()
  @IsNotEmpty()
  public sidewalk_condition: string;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_north: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_south: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_east: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_west: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_north: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_south: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_east: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_west: number;

  //streets
  @IsString()
  @IsNotEmpty()
  public type_street_property_sits: string;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public width_street_property_sits_north: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public width_street_property_sits_south: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public width_street_property_sits_east: number;

  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public width_street_property_sits_west: number;

  //property docs
  @IsDecimal({ decimal_digits: '1' })
  @IsNotEmpty()
  public property_value_according_deeds: number;

  // @IsBoolean()
  // @IsNotEmpty()
  // public property_owners_consent_appear_private_database_commercial_purposes: boolean;

  //OPTIONAL
  //services
  @IsString()
  @IsOptional()
  public electricity: string;

  @IsString()
  @IsOptional()
  public running_water: string;

  @IsString()
  @IsOptional()
  public internet_service: string;

  @IsString()
  @IsOptional()
  public mobil_data: string;

  @IsString()
  @IsOptional()
  public road: string;

  @IsString()
  @IsOptional()
  public comments: string;

  @IsString()
  @IsOptional()
  public water_source: string;

  @IsString()
  @IsOptional()
  public sewerage: string;

  @IsString()
  @IsOptional()
  public electricity_provider: string;

  @IsString()
  @IsOptional()
  public water_provider: string;

  @IsString()
  @IsOptional()
  public internet_service_provider: string;

  @IsString()
  @IsOptional()
  public mobil_data_provider: string;

  @IsString()
  @IsOptional()
  public public_lights: string;

  @IsString()
  @IsOptional()
  public trash_collection_service: string;

  @IsString()
  @IsOptional()
  public street_cleaning_service: string;

  //taxes
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  public municipal_taxes: number;

  //weather
  @IsString()
  @IsOptional()
  public weather: string;
  @IsString()
  @IsOptional()
  public altitude: string;
  @IsString()
  @IsOptional()
  public average_temperature: string;
  @IsString()
  @IsOptional()
  public average_rainfall: string;

  //development
  @IsString()
  @IsOptional()
  public developing_potential_property: string;

  @IsString()
  @IsOptional()
  public agricultural_activity: string;

  @IsString()
  @IsOptional()
  public type_of_agricultural_activity: string;

  @IsString()
  @IsOptional()
  public type_of_animal_farming: string;

  @IsString()
  @IsOptional()
  public annual_yielding: string;

  //safety
  @IsString()
  @IsOptional()
  public property_risks: string;

  @IsString()
  @IsOptional()
  public safety_level_area: string;

  //proximity
  @IsString()
  @IsOptional()
  public proximity_education_centers: string;

  @IsString()
  @IsOptional()
  public proximity_medical_centers: string;

  @IsString()
  @IsOptional()
  public distance_main_city: string;

  @IsString()
  @IsOptional()
  public distance_commercial_port: string;

  @IsString()
  @IsOptional()
  public distance_airport: string;

  @IsString()
  @IsOptional()
  public skilled_labor: string;

  @IsString()
  @IsOptional()
  public unskilled_labor: string;

  //commercial
  @IsString()
  @IsOptional()
  public type_commercial_activity_property: string;

  @IsString()
  @IsOptional()
  public commercial_activity_property: string;

  @IsString()
  @IsOptional()
  public owner_property_owner_business: string;

  @IsString()
  @IsOptional()
  public business_owner_name: string;

  @IsString()
  @IsOptional()
  public business_registered_municipal_record: string;

  //provisional
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  public total_area_property_according_national_registry: number;

  @IsString()
  @IsOptional()
  public type_deeds: string;

  @IsString()
  @IsOptional()
  public property_reference_according_national_registry: string;

  @IsString()
  @IsOptional()
  public property_owners_email: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  public parcel_number_national_registry: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsOptional()
  public map_number_national_registry: number;

  @IsString()
  @IsOptional()
  public mortgage_according_national_registry: string;

  @IsString()
  @IsOptional()
  public legal_impediment_sale_according_national_registry: string;

  @IsString()
  @IsOptional()
  public coworker: string;

  @IsString()
  @IsOptional()
  public working_form_gather_info: string;

  @IsBoolean()
  @IsOptional()
  public isDeleted: boolean;
}
