import { useState } from 'react';
import { Formik } from 'formik';
import { createNewPasswordScheme } from '../../../../shared';
import { useAuthStore } from '../../../../store/auth';
import { FormTitle, Button, Message, Icon } from '../../../common';
import {
    Section,
    CreatePasswordFormContainer,
    MessageWrapper,
    FormBox,
    InputBoxesWrapper,
    InputBox,
    Label,
    Input,
    Error,
    InputIconShow,
    ErrorNotification
} from './CreateNewPasswordForm.styled';
import { fetchCreateNewPassword } from '../../../../services';
import { useNavigate } from 'react-router-dom';


const initialValues = {
    password: '',
    confirmPassword: '',
};


export const CreateNewPasswordForm = () => {
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const { user } = useAuthStore();
    const userEmail = user.email;
    const navigate = useNavigate();
    

    const handleSubmit = async({password}, { resetForm }) => {
        const newPassworsPayload = {
            password,
        };
        
        try {
            await fetchCreateNewPassword(newPassworsPayload);
            resetForm();
            
            navigate(
                '/success',
                { state: '/create-password' }
            );
        } catch (error) {
            setIsError(true);
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(
            (prevShowConfirmPassword) => !prevShowConfirmPassword
        );
        setConfirmPasswordError('');
    };


    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={createNewPasswordScheme}
            >
                {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
                    <CreatePasswordFormContainer>
                        <FormTitle>Create new password</FormTitle>
                        {
                            isError && <ErrorNotification>Fail! Try it again.</ErrorNotification>
                        }                        
                        <MessageWrapper>
                            <Message indentBottom={24} position='center'>
                                Enter a new password for account: {userEmail}
                            </Message>
                        </MessageWrapper>

                        <FormBox>
                            <InputBoxesWrapper>
                                <InputBox>
                                    <Label>Password</Label>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={values.password}
                                        placeholder='Enter your password'
                                        onBlur={handleBlur}
                                        error={errors.password || passwordError}
                                        border={errors.password && touched.password}
                                    />
                                    <InputIconShow onClick={handleTogglePassword}>
                                        <Icon
                                            name={showPassword
                                                ? 'eye'
                                                : 'hidden'
                                            }
                                            size={24}
                                            color={'#EEEEEE'}
                                        />
                                    </InputIconShow>
                                    <Error name='password' component='div' />
                                </InputBox>

                                <InputBox>
                                    <Label>Confirm password</Label>
                                    <Input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={values.confirmPassword}
                                        placeholder='Enter your password'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={errors.confirmPassword && touched.confirmPassword}
                                        error={errors.confirmPassword || confirmPasswordError}
                                    />
                                    <InputIconShow onClick={handleToggleConfirmPassword}>
                                        <Icon
                                            name={showConfirmPassword
                                                ? 'eye'
                                                : 'hidden'
                                            }
                                            size={24}
                                            color={'#EEEEEE'}
                                        />
                                    </InputIconShow>
                                    <Error name='confirmPassword' component='div' />
                                </InputBox>
                            </InputBoxesWrapper>

                            <Button
                                isDisabled={isSubmitting}
                                type='submit'
                                size='fluid'
                            >
                                Submit
                            </Button>
                        </FormBox>
                    </CreatePasswordFormContainer>
                )}
            </Formik>
        </Section>
    )
};


