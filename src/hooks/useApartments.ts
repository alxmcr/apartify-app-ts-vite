import { useEffect, useState } from "react"
import { Apartment } from "../types/apartmentTypes";

export const useApartments = () => {
    const [apartments, setApartments] = useState<Apartment[]>([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_APARTMENTS;
    const url = `${baseURL}/${versionAPI}/${resource}` || ''

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setApartments(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { apartments, loading, error }
}