import * as Yup from 'yup';
import {
    nameScheme,
    emailScheme,
    passwordScheme,
    confirmPasswordScheme,
    confirmationScheme
} from './userSchemeValues';


export const registerScheme = Yup.object().shape({
    name: nameScheme,
    email: emailScheme,
    password: passwordScheme,
    confirmPassword: confirmPasswordScheme,
    confirmation: confirmationScheme
});