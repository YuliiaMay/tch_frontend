import styled from 'styled-components';

export const Section = styled.div`
    padding-top: 50px;
    padding-bottom: 50px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        padding-top: 100px;
        padding-bottom: 100px; 
    };
`;