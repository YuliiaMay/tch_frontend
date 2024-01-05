import * as Yup from 'yup';
import {
    emailScheme,
} from './userSchemeValues';


export const resetPasswordScheme = Yup.object().shape({
    email: emailScheme,
});