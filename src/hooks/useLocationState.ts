import { useEffect, useState } from "react"
import { State } from "../types/apartmentTypes";

export const useLocationState = (id = 0) => {
    const [locationState, setLocationState] = useState<State | null>(null)
    const [errorLocationState, setErrorLocationState] = useState(null)
    const [loadingLocationState, setLoadingLocationState] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_STATES;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoadingLocationState(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLocationState(data)
            })
            .catch(error => {
                setErrorLocationState(error)
            })
            .finally(() => setLoadingLocationState(false))
    }, [url])

    return { locationState, loadingLocationState, errorLocationState }
}