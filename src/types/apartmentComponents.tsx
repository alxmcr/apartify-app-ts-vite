import {
  Apartment,
  Attract,
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
  ou_outdoor_space: number;
  out_value: string;
}

export interface ApartmentInvestProps {
  in_investment: number;
  inv_value: string;
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

export interface FeatureListProps {
  ap_apartment: number;
}

export interface ApartmentAttractProps {
  fe_feature: number;
  att_value: string;
}

export interface ApartmentAttractListProps {
  attracts: Attract[];
}

export interface FeatureIconProps {
  ap_apartment: number;
  feature: Feature;
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

export interface AppErrorProps {
  errorMessage: string;
}

export interface AppNavProps {
  showMenu: boolean;
}
