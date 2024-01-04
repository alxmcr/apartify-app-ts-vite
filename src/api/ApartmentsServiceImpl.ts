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

    // Body
    let body: Apartment[] = [];

    try {
      const response = await fetch(this.urlAPI, { signal });

      if (response.ok) {
        body = await response.json();
      } else if (response.status === 404) {
        throw new Error("User not found.");
      } else if (response.status === 500) {
        throw new Error("Internal server error.");
      } else {
        // Handle other errors
        throw new Error(`An error occurred:, ${response.status}`);
      }
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        throw new Error(
          "Failed to fetch. Please check your network connection."
        );
      }

      throw error;
    }

    return body;
  }
}
