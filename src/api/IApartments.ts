import { Apartment } from "../@types/apartmentTypes";

export interface IApartments {
  findAll(): Promise<Apartment[]>;
}
