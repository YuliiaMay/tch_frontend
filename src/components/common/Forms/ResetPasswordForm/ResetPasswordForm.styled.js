import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';


export const Section = styled.div`
    padding-top: 100px;
    padding-bottom: 150px;

    @media screen and (min-width: ${({theme}) => theme.sizes.tablet}) {
        padding-top: 80px;
    }

    @media screen and (min-width: ${({theme}) => theme.sizes.desk}) {
        padding-top: 100px;
        padding-bottom: 200px; 
    }
`;

export const ResetPasswordFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 408px;

    @media screen and (min-width: ${({theme}) => theme.sizes.tablet}) {
        width: 398px;
    }    
`;

export const FormBox = styled(Form)`
    width: 408px;

    @media screen and (min-width: ${({theme}) => theme.sizes.tablet}) {
        width: 358px;
    }     
`;

export const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;

    @media screen and (min-width: ${({theme}) => theme.sizes.tablet}) {
        margin-bottom: 48px;
    }    
`;

export const Label = styled.label`
    font-weight: 600;
    font-size: 18px;
    line-height: 13px;
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
    color: ${({theme}) => theme.colors.error};
`;


export const ErrorNotification = styled.p`
    color: ${({theme}) => theme.colors.error};
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    margin-bottom: 30px;
`;