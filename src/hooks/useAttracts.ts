import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { Attract } from "../types/apartmentTypes";

export const useAttracts = (ap_apartment = 0, fe_feature = 0) => {
    const [attract, setAttract] = useState<Attract | null | undefined>(null)
    const [errorAttract, setErrorAttract] = useState(null)
    const [loadingAttract, setLoadingAttract] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_ATTRACTS;
    const url = `${baseURL}/${versionAPI}/${resource}` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingAttract(true)

        appHttp<Attract[]>(url, signal)
            .then(data => {
                const firstResult = data?.find(attractItem => {
                    return attractItem?.ap_apartment === ap_apartment && attractItem?.fe_feature === fe_feature
                })

                setAttract(firstResult)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorAttract(error)
                }
            })
            .finally(() => setLoadingAttract(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url, ap_apartment, fe_feature])

    return { attract, loadingAttract, errorAttract }
}