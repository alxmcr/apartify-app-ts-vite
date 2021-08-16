import { useEffect, useState } from "react"
import { Neighborhood } from "../types/apartmentTypes";

export const useLocationNeighborhood = (id = 0) => {
    const [neighborhood, setNeighborhood] = useState<Neighborhood>()
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
                setNeighborhood(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { neighborhood, loading, error }
}