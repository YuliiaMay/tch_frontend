import * as Yup from 'yup';
import {
    currentPasswordScheme,
    passwordScheme,
    confirmPasswordScheme,
} from './userSchemeValues';


export const changePasswordScheme = Yup.object().shape({
    currentPassword: currentPasswordScheme,
    password: passwordScheme,
    confirmPassword: confirmPasswordScheme,
});