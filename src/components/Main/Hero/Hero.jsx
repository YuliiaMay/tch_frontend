import { Button } from "../../common";
import HeroPictureMobile from '../../../assets/images/main/main-mobile.png';
import HeroPictureTablet from '../../../assets/images/main/main-tablet.png';
import HeroPictureDesk from '../../../assets/images/main/main-desk.png';
import HeroPictureLarge from '../../../assets/images/main/main-large.png';
import {
    HeroSection,
    HeroContainer,
    ButtonsContainer,
    HeroText,
    Title,
    SubTitle,
    MobileHeroImg,
    TabletHeroImg,
    DesktopHeroImg,
    LargeHeroImg
} from "./Hero.styled";


const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroText>
                    <Title>Unlock your potential with Skill Stream: where Educators and Learners thrive</Title>
                    <SubTitle>Join Skill Stream to bridge the gap between educators and learners, where educators can showcase their expertise to a global audience while learners discover personalized, enriching educational experiences.</SubTitle>

                    <ButtonsContainer>
                        <Button>
                            Lessons
                        </Button>
                        <Button
                            variant='secondary'
                        >
                            Sign-Up
                        </Button>
                    </ButtonsContainer>
                </HeroText>

                <MobileHeroImg src={HeroPictureMobile} alt="laptop" />
                <TabletHeroImg src={HeroPictureTablet} alt="laptop" />
                <DesktopHeroImg src={HeroPictureDesk} alt="laptop" />
                <LargeHeroImg src={HeroPictureLarge} alt="laptop" />
            </HeroContainer>

        </HeroSection>
    );
}

export default Hero;