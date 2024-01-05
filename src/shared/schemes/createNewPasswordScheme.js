import * as Yup from 'yup';
import {
    passwordScheme,
    confirmPasswordScheme,
} from './userSchemeValues';


export const createNewPasswordScheme = Yup.object().shape({
    password: passwordScheme,
    confirmPassword: confirmPasswordScheme,
});