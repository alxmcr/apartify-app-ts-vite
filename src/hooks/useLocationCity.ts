import { useEffect, useState } from "react"
import { City } from "../types/apartmentTypes";

export const useLocationCity = (id = '') => {
    const [city, setCity] = useState<City>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_CITY;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCity(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { city, loading, error }
}