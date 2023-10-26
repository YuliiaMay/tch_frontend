import { useState } from 'react';
import { Formik } from 'formik';
import { changeEmailScheme } from '../../../../shared';
import { useAuthStore } from '../../../../store/auth';
import { FormTitle } from '../FormTitle';
import { Icon, Button, AccentText, Message } from '../../../common';
import {
    Section,
    ChangeLoginFormContainer,
    FormDescr,
    FormBox,
    InputBox,
    Input,
    Error,
    InputIconShow
} from './ChangeEmailForm.styled';


const initialValues = {
    email: '',
    currentPassword: '',
};


export const ChangeEmailForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const { user, updateUserData } = useAuthStore();
    const userEmail = user.email;

    const handleSubmit = (values, { resetForm }) => {
        updateUserData(values);
        resetForm();
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={changeEmailScheme}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ChangeLoginFormContainer>
                        <FormTitle>Change your email</FormTitle>
                        <FormDescr>
                            <Message>Fill in the form to change the email for account:</Message> <AccentText size={20}>{ userEmail }</AccentText>
                        </FormDescr>
                        <FormBox>
                            <InputBox>
                                <label htmlFor='email'>New email</label>
                                <Input
                                    type='text'
                                    id='email'
                                    name='email'
                                    value={values.email}
                                    placeholder='Enter new email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={errors.email && touched.email && '1px solid red'}
                                />
                                <Error name='email' component='div' />
                            </InputBox>

                            <InputBox>
                                <label>Current password</label>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name='currentPassword'
                                    value={values.currentPassword}
                                    placeholder='Enter your password'
                                    onBlur={handleBlur}
                                    error={errors.currentPassword || passwordError}
                                    border={errors.currentPassword && touched.currentPassword && '1px solid red'}
                                />
                                <InputIconShow onClick={handleTogglePassword}>
                                    {
                                        showPassword
                                            ? <Icon
                                                name='eye'
                                                size={24}
                                                color={'#EEE'}
                                            />
                                            : <Icon
                                                name='hidden'
                                                size={24}
                                                color={'#EEE'}
                                            />
                                    }
                                </InputIconShow>
                                <Error name='currentPassword' component='div' />
                            </InputBox>

                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >Submit
                            </Button>
                        </FormBox>
                    </ChangeLoginFormContainer>
                )}

            </Formik>
        </Section>
    );
}

