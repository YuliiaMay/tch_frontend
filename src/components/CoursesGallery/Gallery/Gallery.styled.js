import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 100px;
    min-width: 408px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        min-width: 736px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        min-width: 1240px;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 100px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.large}) {
        max-width: 1320px;
    }
`;

export const SortWrapper = styled.div`
    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        display: none;
    }
`;

export const MainContentWrapper = styled.div`
    width: 100%;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        display: flex;
    }
`;