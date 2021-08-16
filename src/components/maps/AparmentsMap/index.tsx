import mapboxgl, { MapboxOptions } from "mapbox-gl";
import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "./AparmentsMap.scss";
import { AparmentsMapProps } from "../../../types/apartmentComponents";

export const AparmentsMap = ({
  defaultLatitude = 19.451119091716365,
  defaultLongitude = -99.15295438729619,
  levelZoom = 15,
  apartments = [],
}: AparmentsMapProps) => {
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
        const { ap_coordinates } = apartment;
        const { geo_longitude, geo_latitude } = ap_coordinates;

        const apartMarker = new mapboxgl.Marker();
        apartMarker.setLngLat([geo_longitude, geo_latitude]);
        apartMarker.addTo(map);
      });
    });
  }, [defaultLongitude, defaultLatitude, levelZoom, apartments]);

  return (
    <div className="map__container">
      <div id="map_marker" className="map_marker" ref={mapContainerRef}></div>
    </div>
  );
};
