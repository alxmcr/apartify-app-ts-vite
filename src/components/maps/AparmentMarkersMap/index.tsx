import mapboxgl, { MapboxOptions, MarkerOptions } from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./AparmentMarkersMap.scss";
import { AparmentMarkersMapProps } from "../../../types/apartmentComponents";
import { createCustomMarker } from "../../../helpers/mapHelper";

export const AparmentMarkersMap = ({
  defaultLatitude = 19.451119091716365,
  defaultLongitude = -99.15295438729619,
  levelZoom = 13,
  apartments = [],
}: AparmentMarkersMapProps) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const mapOptions: MapboxOptions = {
      accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN_MAPBOX,
      container: "map_marker",
      style: "mapbox://styles/mapbox/streets-v11?optimize=true",
      center: [defaultLongitude, defaultLatitude],
      zoom: levelZoom,
    };
    var map = new mapboxgl.Map(mapOptions);

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
      apartments.forEach((apartment) => {
        const {ap_latitude, ap_longitude} = apartment;
        const element = createCustomMarker();
        const markerOptions: MarkerOptions = { element };
        const apartMarker = new mapboxgl.Marker(markerOptions);
        apartMarker.setLngLat([ap_longitude, ap_latitude]);
        apartMarker.addTo(map);
      });
    });
  }, [defaultLongitude, defaultLatitude, levelZoom, apartments]);

  return (
    <div id="map_marker" className="map_marker" ref={mapContainerRef}></div>
  );
};
