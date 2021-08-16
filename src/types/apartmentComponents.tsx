import {
  Apartment,
  Feature,
  Flat,
  Investment,
  Neighborhood,
  OutdoorSpace,
  Photo,
  State,
} from "./apartmentTypes";

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

export interface ApartmentFeaturesProps {
  features: Feature[];
}

export interface ApartmentFlatImageCardProps {
  flat: Flat;
}

export interface ApartmentInvestmentsProps {
  investments: Investment[];
}

export interface ApartmentOutdoorSpacesProps {
  outdoorSpaces: OutdoorSpace[];
}

export interface ApartmentImagesProps {
  cover: Photo | null;
  images: Photo[] | null;
}

export interface ApartmentsGalleryProps {
  apartments: Apartment[];
}

export interface AparmentsGridProps {
  apartments: Apartment[];
}

// -- Routing --
export interface ApartmentPageParamsProps {
  id: string;
}

// -- Common --

export interface AppBrandNavProps {
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

export interface AppNavProps {
  showMenu: boolean;
}
