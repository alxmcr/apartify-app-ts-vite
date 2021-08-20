import { useEffect, useState } from "react"
import { Feature } from "../types/apartmentTypes";

export const useFeatures = () => {
    const [features, setFeatures] = useState<Feature[]>([])
    const [errorFeatures, setErrorFeatures] = useState(null)
    const [loadingFeatures, setLoadingFeatures] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/features` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingFeatures(true)
        fetch(url, { signal })
            .then(response => response.json())
            .then(data => {
                setFeatures(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorFeatures(error)
                }
            })
            .finally(() => setLoadingFeatures(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { features, loadingFeatures, errorFeatures }
}