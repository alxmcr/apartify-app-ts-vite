import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { Feature } from "../types/apartmentTypes";

export const useInvestment = (in_investment = 0) => {
    const [feature, setFeature] = useState<Feature | null>(null)
    const [errorFeature, setErrorFeature] = useState(null)
    const [loadingFeature, setLoadingFeature] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_INVESTMENTS;
    const url = `${baseURL}/${versionAPI}/${resource}/${in_investment}` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingFeature(true)

        appHttp<Feature>(url, signal)
            .then(data => {
                setFeature(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorFeature(error)
                }
            })
            .finally(() => setLoadingFeature(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { feature, loadingFeature, errorFeature }
}