import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Field, ErrorMessage } from 'formik';


export const Section = styled.div`
    padding-top: 144px;
    padding-bottom: 56px; 

    @media screen and (min-width: ${({theme}) => theme.sizes.tablet}) {
        padding-top: 123px;
        padding-bottom: 124px; 
    };    

    @media screen and (min-width: ${({theme}) => theme.sizes.desk}) {
        padding-top: 61px;
        padding-bottom: 62px; 
    };  
`;

export const RegisterFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 408px;
    
    @media screen and (min-width: ${({theme}) => theme.sizes.tablet}) {
        max-width: 358px;  
    };
`;

export const UnauthorizedMessage = styled.p`
    color: ${({theme}) => theme.colors.error};
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
`;

export const LoginLinkBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;
    margin-top: 34px;
    margin-bottom: 24px;
    color: ${({theme}) => theme.colors.primaryText};
    font-weight: 400;
    font-size: 20px;
    line-height: 120%    
`;

export const LoginLink = styled(Link)`
    color: ${({theme}) => theme.colors.link};
`;

export const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 24px;
    min-width: 358px;
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
`;

export const Error = styled(ErrorMessage)`
    color: ${({theme}) => theme.colors.error}
`;

export const CheckboxContainer = styled.div`
    margin-bottom: 34px;
`;

export const Checkbox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;

export const ConfirmationText = styled.p`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
`;

export const PolicyLink = styled(Link)`
    color: ${({theme}) => theme.colors.link};
    text-decoration: underline;
`;

export const InputIconShow = styled.span`
    position: absolute;
    top: 44px;
    right: 12px;
`;

