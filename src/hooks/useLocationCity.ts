import { useEffect, useState } from "react"
import { City } from "../types/apartmentTypes";

export const useLocationCity = (id = 0) => {
    const [city, setCity] = useState<City>()
    const [errorCity, setErrorCity] = useState(null)
    const [loadingCity, setLoadingCity] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_CITY;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoadingCity(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCity(data)
            })
            .catch(error => {
                setErrorCity(error)
            })
            .finally(() => setLoadingCity(false))
    }, [url])

    return { city, loadingCity, errorCity }
}