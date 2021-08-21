import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { Apartment } from "../types/apartmentTypes";

export const useApartment = (id: number) => {
    const [apartment, setApartment] = useState<Apartment | null>(null)
    const [errorApartment, setErrorApartment] = useState(null)
    const [loadingApartment, setLoadingApartment] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/apartments/${id}` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingApartment(true)
        appHttp<Apartment>(url, signal)
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