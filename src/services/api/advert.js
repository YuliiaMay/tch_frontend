import axios from 'axios';
import { TOKEN } from '../../shared';


/*
 * GET @ /open/categories/getall
 */
export const fetchAllCategories = async () => {
    try {
        const response = await axios.get(
            `/open/categories/getall`,
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
 * headers: Authorization: token
 * body: { data }
 */
export const fetchCreateAdvert = async (data) => {
    try {
        const response = await axios.post(
            `/protected/advertisement-create`,
            data,
            { headers: {'Authorization': TOKEN} }
        );
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

/*
 * DELETE @ /protected/advertisement-delete
 * headers: Authorization: token
 * body: { id }
 */
export const fetchDeleteAdvert = async (data) => {
    try {
        const response = await axios.delete(
            `/protected/advertisement-delete`,
            {
                headers: { 'Authorization': TOKEN },
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
 * headers: Authorization: token
 * body: { data }
 */
export const fetchUpdateAdvert = async (data) => {
    try {
        const response = await axios.patch(
            `/protected/advertisement-patch`,
            data,
            { headers: {'Authorization': TOKEN} }
        );
        return response;
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * GET @ /protected/advertisement-getmy
 * headers: Authorization: token
 */
export const fetchMyAdverts = async () => {
    try {
        const response = await axios.get(
            `/protected/advertisement-getmy`,
            { headers: {'Authorization': TOKEN} }
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}