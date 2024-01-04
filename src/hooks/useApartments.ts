import { useEffect, useState } from "react";
import { appHttp } from "../helpers/appHttp";
import { Apartment } from "../@types/apartmentTypes";
import { ApartmentsServiceImpl } from "../api/ApartmentsServiceImpl";

export const useApartments = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [errorApartments, setErrorApartments] = useState<Error | null>(null);
  const [loadingApartments, setLoadingApartments] = useState(false);
  const versionAPI = import.meta.env.VITE_APP_API_VERSION;
  const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
  const url = `${baseURL}/${versionAPI}/apartments` || "";

  useEffect(() => {
    // Abort fetch
    let abortController = new AbortController();

    const fetchApartments = async () => {
      try {
        setLoadingApartments(true);

        const service = new ApartmentsServiceImpl(abortController);
        const apiApartments = await service.findAll();
        setApartments(apiApartments);
      } catch (error) {
        console.log(
          "🚀 ~ file: useApartments.ts:26 ~ fetchApartments ~ error:",
          error
        );
        if (error instanceof Error) {
          setErrorApartments(error);
        }
      } finally {
        setLoadingApartments(false);
      }
    };

    // Fetch
    fetchApartments();

    // Clean up
    return function cancel() {
      abortController?.abort();
    };
  }, [url]);

  return { apartments, loadingApartments, errorApartments };
};
