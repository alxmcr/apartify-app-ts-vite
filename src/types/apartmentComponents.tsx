import { Apartment, Neighborhood, State } from "./apartmentTypes";

export interface ApartmentCardProps {
  apartment: Apartment;
}

export interface ApartmentAddressProps {
  ap_street_name: string;
  ap_ext_number: string;
  neighborhood: Neighborhood | null;
}

export interface ApartmentDescriptionProps {
  description: string;
}

export interface ApartmentDetailsProps {
  apartment: Apartment;
}

export interface ApartmentBreadcrumbsProps {
  state: State | null;
  neighborhood: Neighborhood | null;
}
