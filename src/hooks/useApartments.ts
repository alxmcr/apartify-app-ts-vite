import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { Apartment } from "../types/apartmentTypes";

export const useApartments = () => {
    const [apartments, setApartments] = useState<Apartment[]>([])
    const [errorApartments, setErrorApartments] = useState(null)
    const [loadingApartments, setLoadingApartments] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/apartments` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingApartments(true)
        appHttp<Apartment[]>(url, signal)
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