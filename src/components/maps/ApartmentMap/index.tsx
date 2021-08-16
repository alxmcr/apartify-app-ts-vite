import mapboxgl, { MapboxOptions } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './ApartmentMap.scss'
import { ApartmentMapProps } from '../../../types/apartmentComponents';

export const ApartmentMap = ({
    latitude = 19.451119091716365,
    longitude = -99.15295438729619,
    levelZoom = 14
}: ApartmentMapProps) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const mapOptions: MapboxOptions = {
            accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN_MAPBOX,
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: [longitude, latitude],
            zoom: levelZoom
        }
        var map = new mapboxgl.Map(mapOptions);

        map.on('load', function () {
            map.addSource('earthquakes', {
                type: 'geojson',
                data: import.meta.env.VITE_APP_API_BASE_URL_GEO,
            });

            map.addLayer({
                id: 'clusters',
                type: 'circle',
                source: 'earthquakes',
                'paint': {
                    'circle-color': '#ff5a5a',
                    'circle-radius': 8,
                    'circle-stroke-width': 4,
                    'circle-stroke-color': '#ffffff'
                }
            });
        })

    }, [longitude, latitude, levelZoom])

    return (
        <div className="map__container">
            <div
                id="map"
                className="map"
                ref={mapContainerRef}
            ></div>
        </div>
    )
}