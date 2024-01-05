import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
    padding-top: 50px;
    padding-bottom: 150px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        padding-top: 50px;
        padding-bottom: 150px; 
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        padding-top: 100px;
        padding-bottom: 200px; 
    }
`;

export const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;;
    gap: 25px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        margin-top: 50px;
        margin-bottom: 50px;
        flex-direction: row;
        justify-content: space-between;
        gap: none;
    }    
`;

export const StyledLinkToPage = styled(NavLink)`
    width: 120px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};

    &.active {
        border-bottom-color: ${({ theme: { colors } }) => colors.primaryText};
    }     
`;

