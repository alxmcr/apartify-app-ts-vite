import { useEffect, useState } from "react"
import { Neighborhood } from "../types/apartmentTypes";

export const useLocationNeighborhood = (id: number) => {
    console.log({ id })
    const [neighborhood, setNeighborhood] = useState<Neighborhood | null>(null)
    const [errorNeighborhood, setErrorNeighborhood] = useState(null)
    const [loadingNeighborhood, setLoadingNeighborhood] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const resource = import.meta.env.VITE_APP_API_RESOURCE_NEIGHBORHOOD;
    const url = `${baseURL}/${versionAPI}/${resource}/${id}` || ''

    useEffect(() => {
        setLoadingNeighborhood(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setNeighborhood(data)
            })
            .catch(error => {
                setErrorNeighborhood(error)
            })
            .finally(() => setLoadingNeighborhood(false))
    }, [url])

    return { neighborhood, loadingNeighborhood, errorNeighborhood }
}