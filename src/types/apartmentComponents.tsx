import {
  Apartment,
  Attract,
  City,
  Feature,
  Flat,
  Invest,
  Investment,
  Neighborhood,
  Outdoor,
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

export interface ApartmentFeaturesProps {
  features: Feature[];
}

export interface ApartmentFlatImageCardProps {
  flat: Flat;
}

export interface ApartmentInvestmentsProps {
  investments: Investment[];
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

export interface FeatureIconProps {
  ap_apartment: number;
  feature: Feature;
}

// -- Routing --
export interface ApartmentPageParamsProps {
  id: string;
}

// -- Groups --
export interface ApartmentAttractIconsGroupProps {
  ap_apartment: number;
}

// -- Cards --
export interface FeaturesCardProps {
  ap_apartment: number;
}

export interface InvestmentsCardProps {
  ap_apartment: number;
}

export interface OutdoorSpacesCardProps {
  ap_apartment: number;
}

export interface FlatCardProps {
  ap_apartment: number;
}

export interface AddressCardProps {
  apartment: Apartment;
}

// -- Pieces --
export interface ApartmentBreadcrumbsProps {
  neighborhood: Neighborhood | null;
  locationState: State | null;
}

export interface ApartmentDetailsProps {
  ap_street_name: string;
  ap_ext_number: string;
  neighborhood: Neighborhood | null;
  locationState: State | null;
  locationCity: City | null;
}

export interface ApartmentFeatureProps {
  fe_feature: number;
}

export interface ApartmentInvestmentProps {
  in_investment: number;
}

export interface ApartmentOutdoorSpaceProps {
  ou_outdoor_space: number;
}

// -- Relationships --
export interface ApartmentAttractProps {
  fe_feature: number;
  att_value: string;
}

export interface ApartmentAttractIconProps {
  fe_feature: number;
  att_value: string;
}

export interface ApartmentInvestProps {
  in_investment: number;
  inv_value: string;
}

export interface ApartmentOutdoorProps {
  ou_outdoor_space: number;
  out_value: string;
}

// -- Lists --
export interface ApartmentAttractIconsListProps {
  attracts: Attract[];
}

// -- Grids --
export interface ApartmentAttractGridProps {
  attracts: Attract[];
}

export interface ApartmentInvestGridProps {
  invests: Invest[];
}

export interface ApartmentOutdoorGridProps {
  outdoors: Outdoor[];
}

export interface ApartmentPhotoGridProps {
  photos: Photo[];
  ap_url: string | undefined;
  ap_alt: string | undefined;
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
