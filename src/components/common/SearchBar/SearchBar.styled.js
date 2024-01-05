import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SearchBarWrapper = styled(Form)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px; 
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.primaryText};
`;

export const SearchButton = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    padding: 4px;
    background-color: transparent;
    fill: ${({ theme: { colors } }) => colors.primaryText};

    &:hover,
    &:focus {
        background-color: transparent;
        fill: ${({ theme: { colors } }) => colors.blue};
        
    };

    &:active {
        fill: ${({ theme: { colors } }) => colors.clickedYellow};
        background-color: transparent;
    };
`;


export const SearchBarInput = styled(Field)`
    width: 100%;
    border: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 13px;
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
`;

