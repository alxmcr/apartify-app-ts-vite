import { GeoCoordinates } from "./apartmentTypes";

export interface MapMarkerProps {
  latitude: number;
  longitude: number;
  levelZoom: number;
}

export interface GeoCoordinatesProps {
  geoCoordinates: GeoCoordinates;
}
