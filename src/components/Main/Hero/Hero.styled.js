import styled from 'styled-components';
import HeroPictureMobile from '../../../assets/images/main/main-mobile.png';

export const HeroContainer = styled.div`
    height: 720px;
    max-width: 440px;
    background-color: ${({ theme: { colors } }) => colors.golden};
    background-image: url(${HeroPictureMobile});
    background-position: bottom center;
    background-repeat: no-repeat;
`;

export const HeroText = styled.div`
    padding-left: 18px;
    padding-right: 18px;
`;

export const Title = styled.h1`
    color: ${({ theme: { colors } }) => colors.blue};
    font-size: 24px;
    font-weight: 900;
    line-height: 28px;
    margin-bottom: 20px;
`;

export const SubTitle = styled.p`
    color: ${({ theme: { colors } }) => colors.lightBlue};
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 32px;
`;