import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import { resetPasswordScheme } from '../../../../shared';
import { useAuthStore } from '../../../../store/auth';
import { FormTitle, Button, Message } from '../../../common';
import {
    Section,
    ResetPasswordFormContainer,
    FormBox,
    InputBox,
    Label,
    Input,
    Error,
    ErrorNotification
} from './ResetPasswordForm.styled';
import { useState } from 'react';


const initialValues = {
    email: '',
};


export const ResetPasswordForm = () => {
    const [isError, setIsError] = useState(false);
    const { resetPassword } = useAuthStore();
    const navigate = useNavigate();


    const handleSubmit = async(values, { resetForm }) => {
        try {
            await resetPassword(values);
            resetForm();
            handleNavigateToSuccess();
        } catch (error) {
            setIsError(true);
        }
    };

    
    const handleNavigateToSuccess = () => {
        navigate(
            '/success',
            { state: '/reset-password' }
        );
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={resetPasswordScheme}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <ResetPasswordFormContainer>
                        <FormTitle>Reset password</FormTitle>
                        {
                            isError && <ErrorNotification>Failure. Please enter the email address you used to register.</ErrorNotification>
                        }
                        <Message indentBottom={24} position='center'>
                            We will send you instructions on how to reset your password by email
                        </Message>
                        <FormBox>
                            <InputBox>
                                <Label>Email</Label>
                                <Input
                                    type='text'
                                    name='email'
                                    value={values.email}
                                    placeholder='Enter email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email}
                                    border={errors.email && touched.email}
                                />
                                <Error name='email' component='div' />
                            </InputBox>

                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >
                                Submit
                            </Button>
                        </FormBox>
                    </ResetPasswordFormContainer>
                )}
            </Formik>
        </Section>
    )
};