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
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingApartment(true)
        fetch(url, { signal })
            .then(response => response.json())
            .then(data => {
                setApartment(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorApartment(error)
                }
            })
            .finally(() => setLoadingApartment(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { apartment, loadingApartment, errorApartment }
}