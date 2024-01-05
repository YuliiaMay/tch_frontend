import {
    AuthBtnsWrapper,
    LoginLink,
    RegisterLink,
} from './AuthButtonsGroup.styled';


const AuthButtonsGroup = () => {
    return (
        <AuthBtnsWrapper>
            <LoginLink to='/login' >
                Log in
            </LoginLink>
            <RegisterLink to='/register'>
                Sing up
            </RegisterLink>
        </AuthBtnsWrapper>     
    );
};


export default AuthButtonsGroup;