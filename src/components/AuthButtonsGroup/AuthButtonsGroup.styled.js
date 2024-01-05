import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const AuthBtnsWrapper = styled.div`
    display: none;

    @media screen and (min-width: ${({theme}) => theme.sizes.desk}) {
        display: inline;
    }
`;

export const LoginLink = styled(Link)`
    background-color: ${({theme}) => theme.colors.lightBlue};
    color: ${({theme}) => theme.colors.white};
    padding: 12px 45px 12px 45px;
    border-radius: 10px;
    width: 300px;
    margin-right: 10px;

    &:hover,
    &.focus {
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.lightBlue};
        border: 1px solid ${({theme}) => theme.colors.lightBlue};
    }

    @media screen and (min-width: ${({theme}) => theme.sizes.large}) {
        padding: 12px 70px 12px 70px;
    }
`;

export const RegisterLink = styled(Link)`
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.lightBlue};
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.colors.lightBlue};
    padding: 12px 45px 12px 45px;

    &:hover,
    &.focus {
        background-color: ${({theme}) => theme.colors.lightBlue};
        color: ${({theme}) => theme.colors.white};        
    }

    @media screen and (min-width: ${({theme}) => theme.sizes.large}) {
        padding: 12px 65px 12px 65px;
    }    
`;