import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { Flat } from "../types/apartmentTypes";

export const useFlats = (ap_apartment = 0) => {
    const [flats, setFlats] = useState<Flat[]>([])
    const [errorFlats, setErrorFlats] = useState(null)
    const [loadingFlats, setLoadingFlats] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_FLATS;
    const url = `${baseURL}/${versionAPI}/${resource}` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingFlats(true)

        appHttp<Flat[]>(url, signal)
            .then(data => {
                const flatsByApartment = data?.filter(attractItem => {
                    return attractItem?.ap_apartment === ap_apartment
                })
                setFlats(flatsByApartment)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorFlats(error)
                }
            })
            .finally(() => setLoadingFlats(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url, ap_apartment])

    return { flats, loadingFlats, errorFlats }
}