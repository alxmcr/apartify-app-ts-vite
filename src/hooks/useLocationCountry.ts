import { useEffect, useState } from "react"
import { Country } from "../types/apartmentTypes";

export const useLocationCountry = (id = '') => {
    const [country, setCountry] = useState<Country>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_COUNTRIES;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { country, loading, error }
}