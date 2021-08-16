import { useEffect, useState } from "react"
import { Apartment } from "../types/apartmentTypes";

export const useApartments = () => {
    const [apartments, setApartments] = useState<Apartment[]>([])
    const [errorApartments, setErrorApartments] = useState(null)
    const [loadingApartments, setLoadingApartments] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_APARTMENTS;
    const url = `${baseURL}/${versionAPI}/${resource}` || ''

    useEffect(() => {
        setLoadingApartments(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setApartments(data)
            })
            .catch(error => {
                setErrorApartments(error)
            })
            .finally(() => setLoadingApartments(false))
    }, [url])

    return { apartments, loadingApartments, errorApartments }
}