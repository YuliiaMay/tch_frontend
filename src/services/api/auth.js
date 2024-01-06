import axios from 'axios';
import { STATUS_CODES, TOKEN } from '../../shared';
import { getDataFromLocalStorage } from '../localStorage';


/*
 * POST @ /api/auth/register
 * body: { name, email, password }
 */
export const fetchRegister = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/register`,
            values
        );

        if (response.status === STATUS_CODES.created) {
            return response.data.data;
        }
    } catch (error) {
        if (error.response.status === STATUS_CODES.unauthorized) {
            throw error;
        }
    }
}

/*
 * POST @ /api/auth/login
 * body: { email, password }
 */
export const fetchLogin = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/login`,
            values
        );
        
        return response.data.data;
    } catch (error) {
        if (error.response.status === STATUS_CODES.unauthorized) {
            throw error;
        }
    }
}


/*
 * GET @ /protected/userinfo
 * headers: Authorization: Bearer token
 */
export const fetchRefresh = async () => {
    const token = getDataFromLocalStorage('auth').state?.token || null;

    try {
        const response = await axios.get(
            `/protected/userinfo`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );

        return response;
    } catch (error) {
        const faildStatus = error.response.data.status;
        return faildStatus;
    }
}


/*
 * POST @ /api/auth/reset-password
 * body: { email }
 */
export const fetchResetPassword = async (values) => {
    try {
        const response = await axios.post(
            `/api/auth/reset-password`,
            values
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
        throw error;
    }
}


/*
 * PATCH @ /protected/user-patch
 * headers: Authorization: Bearer token:password
 * body: { updateData }
 */
export const fetchUpdateUserData = async (updateData, currentPassword) => {
    try {
        const response = await axios.patch(
            `/protected/user-patch`,
            updateData,
            { headers: { 'Authorization': `${TOKEN}:${currentPassword}` } }
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}


/*
 * PATCH @ /protected/create-password
 * headers: Authorization: Bearer token
 */
export const fetchCreateNewPassword = async (newPassword) => {
    const token = getDataFromLocalStorage('auth').state?.token || null;

    try {
        const response = await axios.patch(
            `/protected/create-password`,
            newPassword,
            { headers: {'Authorization': `Bearer ${token}`} }
        );

        return response.data.data;
    } catch (error) {
        console.log(error.message);
    }
}
