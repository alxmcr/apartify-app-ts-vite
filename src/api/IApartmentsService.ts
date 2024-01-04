import { Apartment } from "../@types/apartmentTypes";

export interface IApartmentsService {
  findAll(): Promise<Apartment[]>;
}
