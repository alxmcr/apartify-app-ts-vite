import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { Outdoor } from "../@types/apartmentTypes";

export const useOutdoors = (ap_apartment = 0) => {
    const [outdoors, setOutdoors] = useState<Outdoor[]>([])
    const [errorOutdoors, setErrorOutdoors] = useState(null)
    const [loadingOutdoors, setLoadingOutdoors] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/outdoors` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingOutdoors(true)

        appHttp<Outdoor[]>(url, signal)
            .then(data => {
                const outdoorSpacesByApartment = data?.filter(attractItem => {
                    return attractItem?.ap_apartment === ap_apartment
                })
                setOutdoors(outdoorSpacesByApartment)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorOutdoors(error)
                }
            })
            .finally(() => setLoadingOutdoors(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url, ap_apartment])

    return { outdoors, loadingOutdoors, errorOutdoors }
}