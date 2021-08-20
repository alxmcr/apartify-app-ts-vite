import { useEffect, useState } from "react"
import { Neighborhood } from "../types/apartmentTypes";

export const useLocationNeighborhood = (id: number) => {
    const [neighborhood, setNeighborhood] = useState<Neighborhood | null>(null)
    const [errorNeighborhood, setErrorNeighborhood] = useState(null)
    const [loadingNeighborhood, setLoadingNeighborhood] = useState(false);
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/neighborhoods/${id}` || ''

    useEffect(() => {
        // Abort fetch
        let abortController = new AbortController();
        const { signal } = abortController;

        setLoadingNeighborhood(true)
        fetch(url, { signal })
            .then(response => response.json())
            .then(data => {
                setNeighborhood(data)
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    setErrorNeighborhood(error)
                }
            })
            .finally(() => setLoadingNeighborhood(false))

        // Clean up
        return function cancel() {
            abortController?.abort();
        };
    }, [url])

    return { neighborhood, loadingNeighborhood, errorNeighborhood }
}