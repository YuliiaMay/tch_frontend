import axios from 'axios';
import { getDataFromLocalStorage } from '../localStorage';


/*
 * GET @ /open/allcategories
 */
export const fetchAllCategories = async () => {
    try {
        const response = await axios.get(
            `/open/allcategories`,
        );

        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * GET @ /open/advertisements/getall
 */
export const fetchAllAdverts = async () => {
    try {
        const response = await axios.get(
            `/open/advertisements/getall`,
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}


/*
 * GET @ /open/advertisements/getbyid/{id}
 */
export const fetchAdvertById = async (advertId) => {
    const body = { id: Number(advertId) };
    try {
        const response = await axios.get(
            `/open/advertisements/getbyid/${advertId}`,
            body,
        );
        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * POST @ /protected/advertisement-create
 * headers: Authorization: Bearer token
 * body: { data }
 */
export const fetchCreateAdvert = async (data) => {
    const token = getDataFromLocalStorage('auth').state?.token || null;
    try {
        const response = await axios.post(
            `/protected/advertisement-create`,
            data,
            { headers: {'Authorization': `Bearer ${token}`} }
        );
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

/*
 * DELETE @ /protected/advertisement-delete
 * headers: Authorization: Bearer token
 * body: { id }
 */
export const fetchDeleteAdvert = async (data) => {
    const token = getDataFromLocalStorage('auth').state?.token || null;

    try {
        const response = await axios.delete(
            `/protected/advertisement-delete`,
            {
                headers: { 'Authorization': `Bearer ${token}` },
                data: data
            }
        );
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

/*
 * PATCH @ /protected/advertisement-patch
 * headers: Authorization: Bearer token
 * body: { data }
 */
export const fetchUpdateAdvert = async (data) => {
    const token = getDataFromLocalStorage('auth').state?.token || null;

    try {
        const response = await axios.patch(
            `/protected/advertisement-patch`,
            data,
            { headers: {'Authorization': `Bearer ${token}`} }
        );
        return response;
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * GET @ /protected/advertisement-getmy
 * headers: Authorization: Bearer token
 */
export const fetchMyAdverts = async () => {
    const token = getDataFromLocalStorage('auth').state?.token || null;

    try {
        const response = await axios.get(
            `/protected/advertisement-getmy`,
            { headers: {'Authorization': `Bearer ${token}`} }
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}