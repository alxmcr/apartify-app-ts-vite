export interface Country {
  co_country: number;
  co_name: string;
  co_abbr: string;
  co_url: string;
  co_alt: string;
}

export interface State {
  st_state: number;
  st_name: string;
  st_abbr: string;
  st_url: string;
  st_alt: string;
}

export interface City {
  ci_city: number;
  ci_name: string;
  ci_abbr: string;
  ci_url: string;
  ci_alt: string;
}

export interface CityHall {
  ch_city_hall: number;
  ch_name: string;
  ch_abbr: string;
  ch_url: string;
  ch_alt: string;
}

export interface Neighborhood {
  ne_neighborhood: number;
  ne_name: string;
  ne_abbr: string;
  ne_url: string;
  ne_alt: string;
}

export interface Feature {
  fe_feature: number;
  fe_type: string;
  fe_name: string;
  fe_icon_url: string;
  fe_icon_color: string;
}

export interface OutdoorSpace {
  ou_outdoor_space: number;
  ou_type: string;
  ou_name: string;
  ou_icon_url: string;
  ou_icon_color: string;
}

export interface Investment {
  in_investment: number;
  in_type: string;
  in_name: string;
  in_icon_url: string;
  in_icon_color: string;
}

export interface Apartment {
  ap_apartment: number;
  ap_description: string;
  ap_floor_number: number;
  ap_cost_offer: string;
  ap_cost_list: string;
  ap_is_remodeling: boolean;
  ap_latitude: number;
  ap_longitude: number;
  ap_url: string;
  ap_alt: string;
  ap_street_name: string;
  ap_ext_number: string;
  ap_int_number: string;
  ne_neighborhood: number;
  ci_city: number;
  ch_city_hall: number;
  co_country: number;
  st_state: number;
  features: Feature[];
  outdoor_spaces: OutdoorSpace[];
  investments: Investment[];
}

export interface Photo {
  ph_photo: number;
  ph_url: string;
  ph_alt: string;
  ph_is_cover: boolean;
  ap_apartment: number;
}

export interface Flat {
  fl_flat: number
  fl_url: string
  fl_alt: string
  ap_apartment: number
}