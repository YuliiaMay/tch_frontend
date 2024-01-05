import * as Yup from 'yup';
import {
    emailScheme,
    passwordScheme,
} from './userSchemeValues';


export const loginScheme = Yup.object().shape({
    email: emailScheme,
    password: passwordScheme,
});