import { Apartment } from "../@types/apartmentTypes";
import { IApartments } from "./IApartments";

export class ApartmentsImpl implements IApartments {
  private urlAPI: string;

  constructor() {
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

    this.urlAPI = `${baseURL}/${versionAPI}/apartments` || "";
  }

  async findAll() {
    // Abort fetch
    let abortController = new AbortController();
    const { signal } = abortController;

    const response = await fetch(this.urlAPI, { signal });
    const body = await response.json();

    return body as Promise<Apartment[]>;
  }
}
