import * as Yup from 'yup';
import {
    emailScheme,
    currentPasswordScheme
} from './userSchemeValues';


export const changeEmailScheme = Yup.object().shape({
    email: emailScheme,
    currentPassword: currentPasswordScheme,
});