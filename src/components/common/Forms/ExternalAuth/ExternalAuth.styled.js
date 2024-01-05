import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-left: 0;
    padding-right: 0;
    margin-top: 24px; 
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Line = styled.div`
    height: 0;
    width: 127.5px;
    border-bottom: 1px solid ${props => props.theme.colors.disabled};
`;

export const OrText = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: ${props => props.theme.colors.disabled};
`;

export const AuthBtns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const AuthLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 20px;
    line-height: 132%;    
    width: 408px;
    height: 48px;
    border: 1px solid ${props => props.theme.colors.disabled};
    border-radius: 10px;
    transition-property: border-color, background-color;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;

    &:hover,
    &:focus {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.blue};
    }    
`;


