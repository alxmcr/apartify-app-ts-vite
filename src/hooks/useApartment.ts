import { useEffect, useState } from "react"
import { Apartment } from "../types/apartmentTypes";

export const useApartment = (id = 0) => {
    const [apartment, setApartment] = useState<Apartment>()
    const [errorApartment, setErrorApartment] = useState(null)
    const [loadingApartment, setLoadingApartment] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_APARTMENTS;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoadingApartment(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setApartment(data)
            })
            .catch(error => {
                setErrorApartment(error)
            })
            .finally(() => setLoadingApartment(false))
    }, [url])

    return { apartment, loadingApartment, errorApartment }
}