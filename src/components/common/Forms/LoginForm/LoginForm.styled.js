import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage, Form } from 'formik';


export const Section = styled.div`
    padding-top: 150px;
    padding-bottom: 169px;

    @media screen and (min-width: 768px) {
        padding-top: 150px;
        padding-bottom: 232px; 
    };    

    @media screen and (min-width: 1440px) {
        padding-top: 60px;
        padding-bottom: 170px; 
    };     
`;

export const LoginFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 408px;
    
    @media screen and (min-width: 768px) {
        max-width: 358px;  
    };    
`;

export const UnauthorizedMessage = styled.p`
    color: ${({theme}) => theme.colors.error};
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
`;

export const LoginLinkBox = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;
    margin-top: 34px;
    margin-bottom: 24px;
    color: ${props => props.theme.colors.primaryText};
    font-weight: 400;
    font-size: 20px;
    line-height: 120%    
`;

export const LoginLink = styled(Link)`
    color: ${props => props.theme.colors.link};
    text-decoration: underline;
`;

export const FormBox = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const InputsGroup = styled.div`
    margin-bottom: 50px;
`;

export const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:first-child {
        margin-bottom: 24px;
    }
`;

export const Input = styled(Field)`
    height: 48px;
    border: 1px solid ${(props) => {
        if (props.border) {
            return props.theme.colors.error;
        }
        return props.theme.colors.disabled;
    }};
    border-radius: 6px; 
    padding-left: 16px;
    font-size: 18px;
    width: 408px;
`;

export const Error = styled(ErrorMessage)`
    color: ${props => props.theme.colors.error};
`;

export const InputIconShow = styled.span`
    position: absolute;
    top: 44px;
    right: 12px;
`;

export const ForgotPassword = styled(Link)`
    color: ${props => props.theme.colors.link};
    font-weight: 400;
    font-size: 14px;
    line-height: 72%;

    margin-top: 4px;
    margin-bottom: 24px;
`;