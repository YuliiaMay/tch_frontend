import styled from 'styled-components';
import { Button } from '../../common';


export const FilterButton = styled(Button)`
    @media screen and (min-width: ${({ theme }) => theme.sizes.desk}) {
        display: none;
    }
`;

export const FilterChildrens = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;