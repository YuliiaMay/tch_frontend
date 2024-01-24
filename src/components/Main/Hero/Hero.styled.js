import styled from 'styled-components';



export const HeroSection = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    background-color: ${({ theme: { colors } }) => colors.golden};

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        padding-top: 100px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        padding-top: 130px;
    }
`;


export const HeroContainer = styled.div`
    padding-left: 16px;
    padding-right: 16px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: flex;
        margin-bottom: 100px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        max-width: 1240px;
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 160px;     
    }     

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.large}) {
        max-width: 1300px;
        margin-bottom: 300px;
    }      
`;


export const HeroText = styled.div`
    padding-left: 18px;
    padding-right: 18px;
`;

export const Title = styled.h1`
    color: ${({ theme: { colors } }) => colors.blue};
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    margin-bottom: 20px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        font-size: 40px;
        line-height: 48px;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        font-size: 56px;
        line-height: 60px;
    }
`;

export const SubTitle = styled.p`
    color: ${({ theme: { colors } }) => colors.lightBlue};
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 32px;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        font-size: 24px;
        margin-bottom: 40px; 
    }
`;

export const ButtonsContainer = styled.div`
    display: flex; 
    gap: 16px; 
`;


export const MobileHeroImg = styled.img`
    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: none;
    }
`;

export const TabletHeroImg = styled.img`
    display: none;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        display: block;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        display: none;
    }
`;

export const DesktopHeroImg = styled.img`
    display: none;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.desk}) {
        display: block;
    }

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.large}) {
        display: none;
    }    
`;

export const LargeHeroImg = styled.img`
    display: none;

    @media screen and (min-width: ${({ theme: { sizes } }) => sizes.large}) {
        display: block;
    }
`;