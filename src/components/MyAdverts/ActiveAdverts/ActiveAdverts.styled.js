import styled from 'styled-components';


export const NoAdversInfo = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Nunito Sans';
    font-weight: 600;
    font-size: 36px; 
    line-height: 120%;
    margin-top: 200px;
    color: ${({theme: {colors}}) => colors.lightBlue};
`;