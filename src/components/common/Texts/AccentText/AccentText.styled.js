import styled from 'styled-components';


export const StyledAccentText = styled.span`
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: ${props => `${props.$size}px`}; 
    line-height: 120%;
    color: ${props => props.theme.colors.primaryText}; 
    margin-bottom: ${props => `${props.$indent}px`}; 
`;