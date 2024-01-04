import { useEffect, useState } from "react"
import { appHttp } from "../helpers/appHttp";
import { OutdoorSpace } from "../@types/apartmentTypes";

export const useOutdoorSpace = (ou_outdoor_space = 0) => {
    const [outdoorSpace, setOutdoorSpace] = useState<OutdoorSpace | null>(null)
    const [errorOutdoorSpace, setErrorOutdoorSpace] = useState(null)
    const [loadingOutdoorSpace, setLoadingOutdoorSpace] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/outdoor_spaces/${ou_outdoor_space}` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingOutdoorSpace(true)

        appHttp<OutdoorSpace>(url, signal)
            .then(data => {
                setOutdoorSpace(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorOutdoorSpace(error)
                }
            })
            .finally(() => setLoadingOutdoorSpace(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { outdoorSpace, loadingOutdoorSpace, errorOutdoorSpace }
}