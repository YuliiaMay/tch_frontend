import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { useAuthStore } from '../../../../store/auth';
import { loginScheme } from '../../../../shared';
import { Icon, Button } from '../../../common';
import { FormTitle } from '../FormTitle';
import { ExternalAuth } from '../ExternalAuth';
import {
    Section,
    LoginFormContainer,
    UnauthorizedMessage,
    FormBox,
    LoginLink,
    LoginLinkBox,
    InputBox,
    Input,
    Error,
    InputIconShow,
    ForgotPassword
} from './LoginForm.styled';


const initialValues = {
    email: '',
    password: '',
};


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isError, setIsError] = useState(false);
    const { login } = useAuthStore();
    const navigate = useNavigate();


    const handleSubmit = async (values, { resetForm }) => {
        try {
            await login(values);
            resetForm();
            handleNavigateToCourses();
        } catch (error) {
            setIsError(true);
            resetForm();
            throw error;            
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setPasswordError('');
    };

    const handleNavigateToCourses = () => {
        navigate('/profile')
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginScheme}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <LoginFormContainer>
                        <FormTitle>Log in</FormTitle>

                        {
                            isError && <UnauthorizedMessage>You are not logged in. Try again!</UnauthorizedMessage>
                        }     
                        
                        <LoginLinkBox>
                            <p>Don’t have an account?</p>
                            <LoginLink to='/register'>Sign up</LoginLink>
                        </LoginLinkBox>
                        <FormBox>
                            <div>
                                <InputBox>
                                    <label>Email</label>
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

                                <InputBox>
                                    <label>Password</label>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={values.password}
                                        placeholder='Password'
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
                            </div>


                            <ForgotPassword to='/reset-password'>Forgot password?</ForgotPassword>

                            <Button
                                size='fluid'
                                type='submit'
                                isDisabled={isSubmitting}
                            >
                                Log In
                            </Button>       
                            <ExternalAuth/>
                        </FormBox>
                    </LoginFormContainer>
                )}
            </Formik>
        </Section>
    )
};

export default LoginForm;