import styled from 'styled-components';
import { Field, Form } from 'formik';


export const Section = styled.div`
    padding-top: 24px;
    padding-bottom: 24px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        padding-top: 50px;
        padding-bottom: 50px; 
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        padding-top: 100px;
        padding-bottom: 100px; 
    };
`;


export const StyledTitle = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px; 
    margin-bottom: 48px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 48px;
        margin-bottom: 50px;
    }
`;


export const StyledForm = styled(Form)`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 408px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        min-width: 731px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        min-width: 1175px;
    }    
`;


export const AdvertFormHeaderContainer = styled.div` 
    width: 100%;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        gap: 160px;
    }    
`;


export const Label = styled.label` 
    font-weight: 600;
    font-size: 20px;
    line-height: 24px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 24 px;
    }
`;


export const AdvertTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 80px;
`;


export const AdvertTitleInput = styled(Field)` 
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.disabled};
    border-radius: 6px;
    width: 100%;
    height: 48px;

    padding-left: 16px;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 24px;
        max-width: 584px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) { 
        min-width: 693px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.large}) { 
        min-width: 837px;
    }
`;


export const ProviderInfoContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        justify-content: flex-start;
        gap: 54px;
    }
`;


export const LargeSizeAvatarContainer = styled.div` 
    display: none;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: block;
    }    
`;


export const MobileSizeAvatarContainer = styled.div`
    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: none;
    }    
`;


export const AvatarImg = styled.img` 
    width: 90px;
    height: 90px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        width: 120px;
        height: 120px;
    }    

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        width: 180px;
        height: 180px;
    }
`;


export const ExperienceInfoContainer = styled.div` 
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    gap: 24px;
`;


export const ExperienceInput = styled(Field)` 
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.disabled};
    border-radius: 6px;
    width: 128px;
    height: 48px;

    padding-left: 16px;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 20px;
    }
`;


export const CategoriesAllInfoContainer= styled.div`
    width: 100%;
`;


export const CategoryContainer = styled.div`
    display: flex;
    gap: 44px;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        max-width: 840px;
        margin-left: 0px;
    }
`;


export const CategoryInput = styled(Field)` 
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.disabled};
    border-radius: 6px;
    width: 100%;
    height: 48px;

    padding-left: 16px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 20px;
    }
`;


export const AdvertOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 50px;
    width: 100%;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        width: 700px;
    }
`;


export const OptionInputContainer = styled.div` 
    width: 260px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        width: 272px;
    }
`;


export const OptionInput = styled(Field)` 
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.disabled};
    border-radius: 6px;
    width: 128px;
    height: 48px;

    padding-left: 16px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 20px;
    }
`;


export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 50px;
    width: 100%;
`;


export const DescriptionText = styled(Field)`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    border: 1px solid ${({ theme: { colors } }) => colors.disabled};
    min-width: 375px;
    padding: 16px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        width: 700px;
    }    

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        min-width: 1140px;
    }
`;


export const ContactsInfoContainer = styled.div`
    margin-bottom: 50px;
    width: 100%;
`;


export const ContactsSubtitle = styled.h2`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 24 px;
    }
`;


export const ContactsList = styled.div`
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        width: 420px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;


export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        width: 500px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;


export const ContactLabel = styled.label` 
    font-weight: 400;
    font-size: 20px;
    line-height: 24px; 

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 24 px;
    }
`;


export const ContactInfoInput = styled(Field)`
    width: 235px;
    height: 48px;

    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    border: 1px solid ${({ theme: { colors } }) => colors.disabled};
    border-radius: 6px;
    padding-left: 16px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 20px;
        min-width: 320px;
    }
`;