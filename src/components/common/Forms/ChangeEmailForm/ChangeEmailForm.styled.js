import styled from 'styled-components';
import { Field, ErrorMessage, Form } from 'formik';


export const Section = styled.div`
    padding-top: 100px;
    padding-bottom: 150px;  

    @media screen and (min-width: 1440px) {
        padding-bottom: 200px; 
    };     
`;

export const ChangeLoginFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 358px;

    @media screen and (min-width: 768px) {
        width: 475px;
    }
`;

export const FormDescr = styled.p`
    text-align: center;
    margin-bottom: 24px;
`;

export const FormBox = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 358px;
`;

export const InputBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    &:first-child {
        margin-bottom: 24px;
    }

    &:nth-child(2) {
        margin-bottom: 32px;
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
`;

export const Error = styled(ErrorMessage)`
    color: ${props => props.theme.colors.error};
`;

export const InputIconShow = styled.span`
    position: absolute;
    top: 44px;
    right: 12px;
`;