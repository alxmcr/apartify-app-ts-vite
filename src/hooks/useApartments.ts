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
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingApartments(true)
        fetch(url, { signal })
            .then(response => response.json())
            .then(data => {
                setApartments(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorApartments(error)
                }
            })
            .finally(() => setLoadingApartments(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { apartments, loadingApartments, errorApartments }
}