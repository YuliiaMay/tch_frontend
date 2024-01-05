import styled from 'styled-components';
import { Icon } from '../../../common';


export const CategoryItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const StyledIcon = styled(Icon)`
    fill: ${({ theme: { colors } }) => colors.white};
    width: 24px;
    height: 24px;
    
    @media screen and (min-width: ${({theme: {sizes}}) => sizes.desk}) {
        fill: ${({ theme: { colors } }) => colors.primaryText};
    }
`;