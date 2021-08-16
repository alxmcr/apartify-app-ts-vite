import mapboxgl, { MapboxOptions } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapMarker.scss'
import { MapMarkerProps } from '../../types/apartmentComponents';

export const MapMarker = ({
    latitude = 19.451119091716365,
    longitude = -99.15295438729619,
    levelZoom = 15
}: MapMarkerProps) => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const mapOptions: MapboxOptions = {
            accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN_MAPBOX || '',
            container: 'map_marker',
            style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
            center: [longitude, latitude],
            zoom: levelZoom
        }
        var map = new mapboxgl.Map(mapOptions);

        map.on('load', function () {
            const apartMarker = new mapboxgl.Marker();
            apartMarker.setLngLat([longitude, latitude])
            apartMarker.addTo(map)
        })

    }, [longitude, latitude, levelZoom])

    return (
        <div className="map__container">
            <div
                id="map_marker"
                className="map_marker"
                ref={mapContainerRef}
            ></div>
        </div>
    )
}