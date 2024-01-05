import * as Yup from 'yup';
import {
    FORMS_VALIDATION,
    EMAIL_REGEXP,
    PASSWORD_REGEXP,
} from '../formsValidation';


export const nameScheme = Yup
    .string()
    .min(FORMS_VALIDATION.minName, 'Name must have at least 2 characters')
    .max(FORMS_VALIDATION.maxName, 'Name can not have more then 16 characters')
    .required('Name is required');


export const emailScheme = Yup
    .string()
    .matches(
        EMAIL_REGEXP,
        'Invalid email format'
    )
    .required('Email is required');


export const passwordScheme = Yup
    .string()
    .min(FORMS_VALIDATION.minPassword, 'Minimum number of characters is 6')
    .max(FORMS_VALIDATION.maxPassword, 'Maximum number of characters is 16')    
    .matches(
        PASSWORD_REGEXP,
        'Password must contain both at least one upper- and at least one lower-case character, one number and one special case character'
    )
    .required('Password is required');


export const currentPasswordScheme = Yup
    .string()
    .min(FORMS_VALIDATION.minPassword, 'Minimum number of characters is 6')
    .max(FORMS_VALIDATION.maxPassword, 'Maximum number of characters is 16')     
    .matches(
        PASSWORD_REGEXP,
        'Password must contain both at least one upper- and at least one lower-case character, one number and one special case character'
    )
    .required('Enter current password is required');


export const confirmPasswordScheme = Yup
    .string()
    .required('Conformation is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match');
    
    
export const confirmationScheme = Yup
    .bool()
    .oneOf([true], 'You must accept the terms and conditions');