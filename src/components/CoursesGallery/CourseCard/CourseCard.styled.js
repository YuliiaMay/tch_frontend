import styled from 'styled-components';
import { Button } from '../../common';


export const Card = styled.div`
    background-color: ${({theme: {colors}}) => colors.card};
    padding: 25px 16px 45px 16px;
    border: ${({ $isFullAdvertInfo, theme: { colors } }) => $isFullAdvertInfo && `1px solid ${colors.primaryText}`};
    border-radius: ${({ $isFullAdvertInfo }) => $isFullAdvertInfo && '8px'};
    border-bottom: 1px solid ${({theme: {colors}}) => colors.primaryText};

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.tablet}) {
        padding-left: 18,5px;
        padding-right: 18,5px; 
    }

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.desk}) {
        padding-left: 20px;
        padding-right: 20px; 
    }
`;


export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
`;


export const CardTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`; 


export const TitleBox = styled.div`
    width: 200px;

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.tablet}) {
        width: auto;
    }    
`;


export const AdvertSubtitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
`;


export const MobileSizeTimeInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: none;
    }
`;


export const LargeSizeTimeInfo = styled.div`
    display: none;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
    }    
`;


export const Avatar = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 8px;
    object-fit: cover;
`;


export const CourseDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    column-gap: 30px;
    margin-bottom: 20px;

    @media screen and (min-width: ${({theme: {sizes}}) => sizes.tablet}) {
        flex-direction: row;
    }    
`;


export const CourseDescr = styled.p`
    background-color: ${({theme: {colors}}) => colors.white};
    padding: 10px 20px 10px 20px;
    border-radius: 8px;
    border: 1px solid #00000040;
    margin-bottom: 24px;
`;


export const CategoryContainer = styled.div`
    margin-bottom: 24px;
`;


export const EducationContainer = styled.div`
    margin-bottom: 24px;
`;


export const ContactsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;


export const StyledDeleteButton = styled(Button)`
    background-color: transparent;
`;
