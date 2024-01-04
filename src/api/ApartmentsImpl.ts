import { Apartment } from "../@types/apartmentTypes";
import { appHttp } from "../helpers/appHttp";
import { IApartments } from "./IApartments";

export class ApartmentsImpl implements IApartments {
  async findAll() {
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
    const url = `${baseURL}/${versionAPI}/apartments` || "";
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;

    const response = await fetch(url, { signal });
    const body = await response.json();

    return body as Promise<Apartment[]>;
  }
}
