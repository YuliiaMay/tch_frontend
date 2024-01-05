import { getDataFromLocalStorage } from "../services";

export const TOKEN = getDataFromLocalStorage('auth').state?.token || null;
