import { useEffect, useState } from "react"
import { GeoApartment } from "../types/apartmentTypes";

export const useGeoApartment = (id = 0) => {
    const [geoApartment, setGeoApartment] = useState<GeoApartment>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_GEO;
    const url = `${baseURL}/${versionAPI}/${resource}` || ''

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setGeoApartment(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { geoApartment, loading, error }
}