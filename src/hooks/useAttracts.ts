import { useEffect, useState } from "react"
import { Attract } from "../types/apartmentTypes";

export const useAttracts = (ap_apartment = 0, fe_feature = 0) => {
    const [attract, setAttract] = useState<Attract | null>(null)
    const [errorAttract, setErrorAttract] = useState(null)
    const [loadingAttract, setLoadingAttract] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_ATTRACTS;
    const url = `${baseURL}/${versionAPI}/${resource}` || ''

    useEffect(() => {
        setLoadingAttract(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log({ ap_apartment, fe_feature })
                setAttract(data)
            })
            .catch(error => {
                setErrorAttract(error)
            })
            .finally(() => setLoadingAttract(false))
    }, [url])

    return { attract, loadingAttract, errorAttract }
}