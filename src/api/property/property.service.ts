import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from './property.entity';
import { CreatePropertyDto } from './property.dto';

@Injectable()
export class PropertyService {
  @InjectRepository(Property)
  private readonly repository: Repository<Property>;

  public getProperty(id: any): Promise<Property> {
    return this.repository.findOne(id);
  }

  public getPropertys(): Promise<Property[]> {
    return this.repository.find();
  }

  public createProperty(body: CreatePropertyDto): Promise<Property> {
    const property: Property = new Property();

    property.state = body.state;
    property.town = body.town;
    property.latitude = body.latitude;
    property.longitude = body.longitude;
    property.property_address_national_registry =
      body.property_address_national_registry;
    property.property_address_record = body.property_address_record;
    property.property_picture = body.property_picture;
    property.property_id_number_national_registry =
      body.property_id_number_national_registry;
    property.cadastral_id_number_from_national_registry =
      body.cadastral_id_number_from_national_registry;
    property.id_number_municipal_record = body.id_number_municipal_record;
    property.owners_id = body.owners_id;
    property.sequential_number_record = body.sequential_number_record;
    property.volume = body.volume;
    property.sheet = body.sheet;
    property.property_owners_according_deeds_municipal_records =
      body.property_owners_according_deeds_municipal_records;
    property.property_owners_phone_number = body.property_owners_phone_number;
    property.owners_name_national_registry = body.owners_name_national_registry;
    property.name_on_file_municipal_taxes = body.name_on_file_municipal_taxes;
    property.municipal_taxes_account_number =
      body.municipal_taxes_account_number;
    property.type_of_property = body.type_of_property;
    property.total_area_deeds = body.total_area_deeds;
    property.type_of_terrain = body.type_of_terrain;
    property.area = body.area;
    property.construction_area_owner = body.construction_area_owner;
    property.number_floors_property = body.number_floors_property;
    property.electricity_meter_number = body.electricity_meter_number;
    property.sidewalk_condition = body.sidewalk_condition;
    property.lineal_meters_property_facing_paved_street_north =
      body.lineal_meters_property_facing_paved_street_north;
    property.lineal_meters_property_facing_paved_street_south =
      body.lineal_meters_property_facing_paved_street_south;
    property.lineal_meters_property_facing_paved_street_east =
      body.lineal_meters_property_facing_paved_street_east;
    property.lineal_meters_property_facing_paved_street_west =
      body.lineal_meters_property_facing_paved_street_west;
    property.lineal_meters_property_facing_dirt_street_north =
      body.lineal_meters_property_facing_dirt_street_north;
    property.lineal_meters_property_facing_dirt_street_south =
      body.lineal_meters_property_facing_dirt_street_south;
    property.lineal_meters_property_facing_dirt_street_east =
      body.lineal_meters_property_facing_dirt_street_east;
    property.lineal_meters_property_facing_dirt_street_west =
      body.lineal_meters_property_facing_dirt_street_west;
    property.type_street_property_sits = body.type_street_property_sits;
    property.width_street_property_sits_north =
      body.width_street_property_sits_north;
    property.width_street_property_sits_south =
      body.width_street_property_sits_south;
    property.width_street_property_sits_east =
      body.width_street_property_sits_east;
    property.width_street_property_sits_west =
      body.width_street_property_sits_west;
    property.property_value_according_deeds =
      body.property_value_according_deeds;

    //optional
    body.electricity ? (property.electricity = body.electricity) : null;
    body.running_water ? (property.running_water = body.running_water) : null;
    body.internet_service
      ? (property.internet_service = body.internet_service)
      : null;
    body.mobil_data ? (property.mobil_data = body.mobil_data) : null;
    body.road ? (property.road = body.road) : null;
    body.comments ? (property.comments = body.comments) : null;
    body.water_source ? (property.water_source = body.water_source) : null;
    body.sewerage ? (property.sewerage = body.sewerage) : null;
    body.electricity_provider
      ? (property.electricity_provider = body.electricity_provider)
      : null;
    body.water_provider
      ? (property.water_provider = body.water_provider)
      : null;
    body.internet_service_provider
      ? (property.internet_service_provider = body.internet_service_provider)
      : null;
    body.mobil_data_provider
      ? (property.mobil_data_provider = body.mobil_data_provider)
      : null;
    body.public_lights ? (property.public_lights = body.public_lights) : null;
    body.trash_collection_service
      ? (property.trash_collection_service = body.trash_collection_service)
      : null;
    body.street_cleaning_service
      ? (property.street_cleaning_service = body.street_cleaning_service)
      : null;
    body.municipal_taxes
      ? (property.municipal_taxes = body.municipal_taxes)
      : null;
    body.weather ? (property.weather = body.weather) : null;
    body.altitude ? (property.altitude = body.altitude) : null;
    body.average_temperature
      ? (property.average_temperature = body.average_temperature)
      : null;
    body.average_rainfall
      ? (property.average_rainfall = body.average_rainfall)
      : null;
    body.developing_potential_property
      ? (property.developing_potential_property =
          body.developing_potential_property)
      : null;
    body.agricultural_activity
      ? (property.agricultural_activity = body.agricultural_activity)
      : null;
    body.type_of_agricultural_activity
      ? (property.type_of_agricultural_activity =
          body.type_of_agricultural_activity)
      : null;
    body.type_of_animal_farming
      ? (property.type_of_animal_farming = body.type_of_animal_farming)
      : null;
    body.annual_yielding
      ? (property.annual_yielding = body.annual_yielding)
      : null;
    body.property_risks
      ? (property.property_risks = body.property_risks)
      : null;
    body.safety_level_area
      ? (property.safety_level_area = body.safety_level_area)
      : null;
    body.proximity_education_centers
      ? (property.proximity_education_centers =
          body.proximity_education_centers)
      : null;
    body.proximity_medical_centers
      ? (property.proximity_medical_centers = body.proximity_medical_centers)
      : null;
    body.distance_main_city
      ? (property.distance_main_city = body.distance_main_city)
      : null;
    body.distance_commercial_port
      ? (property.distance_commercial_port = body.distance_commercial_port)
      : null;
    body.distance_airport
      ? (property.distance_airport = body.distance_airport)
      : null;
    body.skilled_labor ? (property.skilled_labor = body.skilled_labor) : null;
    body.unskilled_labor
      ? (property.unskilled_labor = body.unskilled_labor)
      : null;
    body.type_commercial_activity_property
      ? (property.type_commercial_activity_property =
          body.type_commercial_activity_property)
      : null;
    body.commercial_activity_property
      ? (property.commercial_activity_property =
          body.commercial_activity_property)
      : null;
    body.owner_property_owner_business
      ? (property.owner_property_owner_business =
          body.owner_property_owner_business)
      : null;
    body.business_owner_name
      ? (property.business_owner_name = body.business_owner_name)
      : null;
    body.business_registered_municipal_record
      ? (property.business_registered_municipal_record =
          body.business_registered_municipal_record)
      : null;
    body.total_area_property_according_national_registry
      ? (property.total_area_property_according_national_registry =
          body.total_area_property_according_national_registry)
      : null;
    body.type_deeds ? (property.type_deeds = body.type_deeds) : null;
    body.property_reference_according_national_registry
      ? (property.property_reference_according_national_registry =
          body.property_reference_according_national_registry)
      : null;
    body.property_owners_email
      ? (property.property_owners_email = body.property_owners_email)
      : null;
    body.parcel_number_national_registry
      ? (property.parcel_number_national_registry =
          body.parcel_number_national_registry)
      : null;
    body.map_number_national_registry
      ? (property.map_number_national_registry =
          body.map_number_national_registry)
      : null;
    body.mortgage_according_national_registry
      ? (property.mortgage_according_national_registry =
          body.mortgage_according_national_registry)
      : null;
    body.legal_impediment_sale_according_national_registry
      ? (property.legal_impediment_sale_according_national_registry =
          body.legal_impediment_sale_according_national_registry)
      : null;
    body.coworker ? (property.coworker = body.coworker) : null;
    body.working_form_gather_info
      ? (property.working_form_gather_info = body.working_form_gather_info)
      : null;

    return this.repository.save(property);
  }

  public async updateProperty(
    id: any,
    body: CreatePropertyDto,
  ): Promise<Property> {
    const property = await this.repository
      .findOne({ where: { id: id } })
      .then((property) => property);

    body.state ? (property.state = body.state) : null;
    body.town ? (property.town = body.town) : null;
    body.town ? (property.town = body.town) : null;
    body.latitude ? (property.latitude = body.latitude) : null;
    body.longitude ? (property.longitude = body.longitude) : null;
    body.property_address_national_registry
      ? (property.property_address_national_registry =
          body.property_address_national_registry)
      : null;
    body.property_picture
      ? (property.property_picture = body.property_picture)
      : null;
    body.property_id_number_national_registry
      ? (property.property_id_number_national_registry =
          body.property_id_number_national_registry)
      : null;
    body.cadastral_id_number_from_national_registry
      ? (property.cadastral_id_number_from_national_registry =
          body.cadastral_id_number_from_national_registry)
      : null;
    body.id_number_municipal_record
      ? (property.id_number_municipal_record = body.id_number_municipal_record)
      : null;
    body.sequential_number_record
      ? (property.sequential_number_record = body.sequential_number_record)
      : null;
    body.volume ? (property.volume = body.volume) : null;
    body.property_owners_according_deeds_municipal_records
      ? (property.property_owners_according_deeds_municipal_records =
          body.property_owners_according_deeds_municipal_records)
      : null;
    body.property_address_record
      ? (property.property_address_record = body.property_address_record)
      : null;
    body.owners_id ? (property.owners_id = body.owners_id) : null;
    body.property_owners_phone_number
      ? (property.property_owners_phone_number =
          body.property_owners_phone_number)
      : null;
    body.name_on_file_municipal_taxes
      ? (property.name_on_file_municipal_taxes =
          body.name_on_file_municipal_taxes)
      : null;
    body.municipal_taxes_account_number
      ? (property.municipal_taxes_account_number =
          body.municipal_taxes_account_number)
      : null;
    body.type_of_property
      ? (property.type_of_property = body.type_of_property)
      : null;
    body.total_area_deeds
      ? (property.total_area_deeds = body.total_area_deeds)
      : null;
    body.type_of_terrain
      ? (property.type_of_terrain = body.type_of_terrain)
      : null;
    body.area ? (property.area = body.area) : null;
    body.construction_area_owner
      ? (property.construction_area_owner = body.construction_area_owner)
      : null;
    body.number_floors_property
      ? (property.number_floors_property = body.number_floors_property)
      : null;
    body.electricity_meter_number
      ? (property.electricity_meter_number = body.electricity_meter_number)
      : null;
    body.electricity_meter_number
      ? (property.electricity_meter_number = body.electricity_meter_number)
      : null;
    body.sidewalk_condition
      ? (property.sidewalk_condition = body.sidewalk_condition)
      : null;
    body.lineal_meters_property_facing_paved_street_north
      ? (property.lineal_meters_property_facing_paved_street_north =
          body.lineal_meters_property_facing_paved_street_north)
      : null;
    body.lineal_meters_property_facing_paved_street_south
      ? (property.lineal_meters_property_facing_paved_street_south =
          body.lineal_meters_property_facing_paved_street_south)
      : null;
    body.lineal_meters_property_facing_paved_street_east
      ? (property.lineal_meters_property_facing_paved_street_east =
          body.lineal_meters_property_facing_paved_street_east)
      : null;
    body.lineal_meters_property_facing_paved_street_west
      ? (property.lineal_meters_property_facing_paved_street_west =
          body.lineal_meters_property_facing_paved_street_west)
      : null;
    body.lineal_meters_property_facing_dirt_street_north
      ? (property.lineal_meters_property_facing_dirt_street_north =
          body.lineal_meters_property_facing_dirt_street_north)
      : null;
    body.lineal_meters_property_facing_dirt_street_south
      ? (property.lineal_meters_property_facing_dirt_street_south =
          body.lineal_meters_property_facing_dirt_street_south)
      : null;
    body.lineal_meters_property_facing_dirt_street_east
      ? (property.lineal_meters_property_facing_dirt_street_east =
          body.lineal_meters_property_facing_dirt_street_east)
      : null;
    body.lineal_meters_property_facing_dirt_street_west
      ? (property.lineal_meters_property_facing_dirt_street_west =
          body.lineal_meters_property_facing_dirt_street_west)
      : null;
    body.type_street_property_sits
      ? (property.type_street_property_sits = body.type_street_property_sits)
      : null;
    body.width_street_property_sits_north
      ? (property.width_street_property_sits_north =
          body.width_street_property_sits_north)
      : null;
    body.width_street_property_sits_south
      ? (property.width_street_property_sits_south =
          body.width_street_property_sits_south)
      : null;
    body.width_street_property_sits_east
      ? (property.width_street_property_sits_east =
          body.width_street_property_sits_east)
      : null;
    body.width_street_property_sits_west
      ? (property.width_street_property_sits_west =
          body.width_street_property_sits_west)
      : null;
    body.property_value_according_deeds
      ? (property.property_value_according_deeds =
          body.property_value_according_deeds)
      : null;
    body.electricity ? (property.electricity = body.electricity) : null;
    body.running_water ? (property.running_water = body.running_water) : null;
    body.internet_service
      ? (property.internet_service = body.internet_service)
      : null;
    body.mobil_data ? (property.mobil_data = body.mobil_data) : null;
    body.road ? (property.road = body.road) : null;
    body.comments ? (property.comments = body.comments) : null;
    body.water_source ? (property.water_source = body.water_source) : null;
    body.sewerage ? (property.sewerage = body.sewerage) : null;
    body.electricity_provider
      ? (property.electricity_provider = body.electricity_provider)
      : null;
    body.water_provider
      ? (property.water_provider = body.water_provider)
      : null;
    body.internet_service_provider
      ? (property.internet_service_provider = body.internet_service_provider)
      : null;
    body.mobil_data_provider
      ? (property.mobil_data_provider = body.mobil_data_provider)
      : null;
    body.public_lights ? (property.public_lights = body.public_lights) : null;
    body.trash_collection_service
      ? (property.trash_collection_service = body.trash_collection_service)
      : null;
    body.street_cleaning_service
      ? (property.street_cleaning_service = body.street_cleaning_service)
      : null;
    body.municipal_taxes
      ? (property.municipal_taxes = body.municipal_taxes)
      : null;
    body.weather ? (property.weather = body.weather) : null;
    body.altitude ? (property.altitude = body.altitude) : null;
    body.average_temperature
      ? (property.average_temperature = body.average_temperature)
      : null;
    body.average_rainfall
      ? (property.average_rainfall = body.average_rainfall)
      : null;
    body.developing_potential_property
      ? (property.developing_potential_property =
          body.developing_potential_property)
      : null;
    body.agricultural_activity
      ? (property.agricultural_activity = body.agricultural_activity)
      : null;
    body.type_of_agricultural_activity
      ? (property.type_of_agricultural_activity =
          body.type_of_agricultural_activity)
      : null;
    body.type_of_animal_farming
      ? (property.type_of_animal_farming = body.type_of_animal_farming)
      : null;
    body.annual_yielding
      ? (property.annual_yielding = body.annual_yielding)
      : null;
    body.property_risks
      ? (property.property_risks = body.property_risks)
      : null;
    body.safety_level_area
      ? (property.safety_level_area = body.safety_level_area)
      : null;
    body.proximity_education_centers
      ? (property.proximity_education_centers =
          body.proximity_education_centers)
      : null;
    body.proximity_medical_centers
      ? (property.proximity_medical_centers = body.proximity_medical_centers)
      : null;
    body.distance_main_city
      ? (property.distance_main_city = body.distance_main_city)
      : null;
    body.distance_commercial_port
      ? (property.distance_commercial_port = body.distance_commercial_port)
      : null;
    body.distance_airport
      ? (property.distance_airport = body.distance_airport)
      : null;
    body.skilled_labor ? (property.skilled_labor = body.skilled_labor) : null;
    body.unskilled_labor
      ? (property.unskilled_labor = body.unskilled_labor)
      : null;
    body.type_commercial_activity_property
      ? (property.type_commercial_activity_property =
          body.type_commercial_activity_property)
      : null;
    body.commercial_activity_property
      ? (property.commercial_activity_property =
          body.commercial_activity_property)
      : null;
    body.owner_property_owner_business
      ? (property.owner_property_owner_business =
          body.owner_property_owner_business)
      : null;
    body.business_owner_name
      ? (property.business_owner_name = body.business_owner_name)
      : null;
    body.business_registered_municipal_record
      ? (property.business_registered_municipal_record =
          body.business_registered_municipal_record)
      : null;
    body.total_area_property_according_national_registry
      ? (property.total_area_property_according_national_registry =
          body.total_area_property_according_national_registry)
      : null;
    body.type_deeds ? (property.type_deeds = body.type_deeds) : null;
    body.property_reference_according_national_registry
      ? (property.property_reference_according_national_registry =
          body.property_reference_according_national_registry)
      : null;
    body.property_owners_email
      ? (property.property_owners_email = body.property_owners_email)
      : null;
    body.parcel_number_national_registry
      ? (property.parcel_number_national_registry =
          body.parcel_number_national_registry)
      : null;
    body.map_number_national_registry
      ? (property.map_number_national_registry =
          body.map_number_national_registry)
      : null;
    body.mortgage_according_national_registry
      ? (property.mortgage_according_national_registry =
          body.mortgage_according_national_registry)
      : null;
    body.legal_impediment_sale_according_national_registry
      ? (property.legal_impediment_sale_according_national_registry =
          body.legal_impediment_sale_according_national_registry)
      : null;
    body.coworker ? (property.coworker = body.coworker) : null;
    body.working_form_gather_info
      ? (property.working_form_gather_info = body.working_form_gather_info)
      : null;

    return this.repository.save(property);
  }
}
