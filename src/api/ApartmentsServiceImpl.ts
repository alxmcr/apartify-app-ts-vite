import { Apartment } from "../@types/apartmentTypes";
import { IApartmentsService } from "./IApartmentsService";

export class ApartmentsServiceImpl implements IApartmentsService {
  private urlAPI: string;
  private abortController: AbortController;

  constructor(apiAbort: AbortController) {
    const versionAPI = import.meta.env.VITE_APP_API_VERSION;
    const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

    this.urlAPI = `${baseURL}/${versionAPI}/apartments` || "";
    this.abortController = apiAbort;
  }

  async findAll() {
    // Abort fetch
    const { signal } = this.abortController;

    const response = await fetch(this.urlAPI, { signal });
    const body = await response.json();

    return body as Promise<Apartment[]>;
  }
}
