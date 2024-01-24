import styled from 'styled-components';

export const GalleryListSection = styled.div`
    @media screen and (min-width: ${({ theme: {sizes} }) => sizes.desk}) {
        display: flex;
        justify-content: center;
        width: 100%;
    }     
`;

export const List = styled.div`
    display: ${({ $isVisible }) => $isVisible ? 'block' : 'none'};
    background-color: ${({theme: {colors}}) => colors.card};
    border-top: 1px solid ${({theme: {colors}}) => colors.primaryText};
    border-left: 1px solid ${({theme: {colors}}) => colors.primaryText};
    border-right: 1px solid ${({theme: {colors}}) => colors.primaryText};
    border-radius: 8px 8px 0px 0px;
    padding-top: 15px;
    width: 408px;

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.tablet}) {
        width: 736px;
    }

    @media screen and (min-width: ${({ theme: {sizes} }) => sizes.desk}) {
        display: block;
        width: 860px;
    }    
`;