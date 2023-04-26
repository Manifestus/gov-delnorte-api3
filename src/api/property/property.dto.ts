import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreatePropertyDto {
  //main
  @IsString()
  @IsNotEmpty()
  public state: string;

  @IsString()
  @IsNotEmpty()
  public town: string;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public latitude: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public longitude: number;

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

  @IsInt()
  @Min(0)
  @Max(99999999)
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

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public property_owners_phone_number: number;

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

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public total_area_deeds: number;

  @IsString()
  @IsNotEmpty()
  public type_of_terrain: string;

  @IsString()
  @IsNotEmpty()
  public area: string;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public construction_area_owner: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public number_floors_property: number;

  @IsString()
  @IsNotEmpty()
  public electricity_meter_number: string;

  //paving
  @IsString()
  @IsNotEmpty()
  public sidewalk_condition: string;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_north: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_south: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_east: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_paved_street_west: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_north: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_south: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_east: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public lineal_meters_property_facing_dirt_street_west: number;

  //streets
  @IsString()
  @IsNotEmpty()
  public type_street_property_sits: string;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public width_street_property_sits_north: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public width_street_property_sits_south: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public width_street_property_sits_east: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public width_street_property_sits_west: number;

  //property docs
  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  public property_value_according_deeds: number;

  // @IsBoolean()
  // @IsNotEmpty()
  // public property_owners_consent_appear_private_database_commercial_purposes: boolean;

  //OPTIONAL
  //services
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public electricity: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public running_water: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public internet_service: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public mobil_data: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public road: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public comments: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public water_source: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public sewerage: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public electricity_provider: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public water_provider: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public internet_service_provider: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public mobil_data_provider: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public public_lights: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public trash_collection_service: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public street_cleaning_service: string;

  //taxes
  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  @IsOptional()
  public municipal_taxes: number;

  //weather
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public weather: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public altitude: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public average_temperature: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public average_rainfall: string;

  //development
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public developing_potential_property: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public agricultural_activity: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public type_of_agricultural_activity: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public type_of_animal_farming: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public annual_yielding: string;

  //safety
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public property_risks: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public safety_level_area: string;

  //proximity
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public proximity_education_centers: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public proximity_medical_centers: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public distance_main_city: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public distance_commercial_port: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public distance_airport: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public skilled_labor: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public unskilled_labor: string;

  //commercial
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public type_commercial_activity_property: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public commercial_activity_property: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public owner_property_owner_business: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public business_owner_name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public business_registered_municipal_record: string;

  //provisional
  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  @IsOptional()
  public total_area_property_according_national_registry: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public type_deeds: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public property_reference_according_national_registry: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public property_owners_email: string;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  @IsOptional()
  public parcel_number_national_registry: number;

  @IsInt()
  @Min(0)
  @Max(99999999)
  @IsNotEmpty()
  @IsOptional()
  public map_number_national_registry: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public mortgage_according_national_registry: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public legal_impediment_sale_according_national_registry: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public coworker: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public working_form_gather_info: string;
}
