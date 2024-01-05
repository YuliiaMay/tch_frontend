import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { registerScheme } from '../../../../shared';
import { useAuthStore } from '../../../../store/auth';
import {
    Button,
    ExternalAuth,
    FormTitle,
    Icon,
} from '../../../common';
import {
    Section,
    RegisterFormContainer,
    UnauthorizedMessage,
    LoginLink,
    LoginLinkBox,
    InputBox,
    Input,
    Error,
    CheckboxContainer,
    Checkbox,
    ConfirmationText,
    PolicyLink,
    InputIconShow,
} from './RegisterForm.styled';


const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    confirmation: false
};

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isError, setIsError] = useState(false);
    const { register } = useAuthStore();
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {
        try {
            if (isChecked) {
                await register(values);
                resetForm();
                setIsChecked(false);
                handleNavigateToLogin();
            }            
        } catch (error) {
            setIsError(true);
            resetForm();
            setIsChecked(false);
            throw error;
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

    const handleToggleCheck = () => {
        setIsChecked(!isChecked);
        return isChecked;
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    return (
        <Section>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={registerScheme}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <RegisterFormContainer>
                        <FormTitle>Sign up</FormTitle>

                        {
                            isError && <UnauthorizedMessage>Fail. Try again!</UnauthorizedMessage>
                        }

                        <LoginLinkBox>
                            Already have an account?
                            <LoginLink to='/login'>Log in</LoginLink>
                        </LoginLinkBox>
                        <Form>
                            <InputBox>
                                <label htmlFor='name'>Name</label>
                                <Input
                                    id='name'
                                    type='text'
                                    name='name'
                                    placeholder='Enter your name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={touched.name && errors.name}
                                />
                                <Error name='name' component='div' />
                            </InputBox>


                            <InputBox>
                                <label htmlFor='email'>Email</label>
                                <Input
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={values.email}
                                    placeholder='Enter email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    border={errors.email && touched.email}
                                />
                                <Error name='email' component='div' />
                            </InputBox>


                            <InputBox>
                                <label htmlFor='password'>Password</label>
                                <Input
                                    id='password'
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
                            

                            <InputBox>
                                <label htmlFor='confirmPassword'>Confirm password</label>
                                <Input
                                    id='confirmPassword'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    placeholder='Confirm password'
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
                            

                            <CheckboxContainer>
                                <label htmlFor='confirmation'>
                                    <Checkbox>
                                        <Field
                                            id='confirmation'
                                            name='confirmation'
                                            type='checkbox'
                                            style={{display: 'none'}}
                                            onClick={handleToggleCheck}
                                        />
                                        <div>
                                            <Icon
                                                name={isChecked
                                                    ? 'checked'
                                                    : 'unchecked'
                                                }
                                                size={24}
                                            />
                                        </div>
                                        <ConfirmationText>
                                            By checking this box, you are creating an account and you agree to the <PolicyLink target='_blank' to='/conditions'>Terms & Conditions</PolicyLink> and <PolicyLink target='_blank' to='/policy'>Privacy Policy</PolicyLink>.
                                        </ConfirmationText>
                                    </Checkbox>
                                    <Error name='confirmation' component='div' />
                                </label>
                            </CheckboxContainer>

                            <Button
                                size='fluid'
                                type='submit'
                                isDisabled={isSubmitting}
                            >
                                Sign up
                            </Button>
                            <ExternalAuth/>
                        </Form>
                    </RegisterFormContainer>
                )}
            </Formik>
        </Section>
    )
};

