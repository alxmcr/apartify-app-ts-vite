import { useEffect, useState } from "react"
import { State } from "../types/apartmentTypes";

export const useLocationState = (id = 0) => {
    const [locationState, setLocationState] = useState<State>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_STATES;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLocationState(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [url])

    return { locationState, loading, error }
}