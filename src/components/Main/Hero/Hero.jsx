import { Button } from "../../common";
import HeroPictureMobile from '../../../assets/images/main/main-mobile.png';
import {
    HeroContainer,
    HeroText,
    Title,
    SubTitle
} from "./Hero.styled";


const Hero = () => {
    return (
        <HeroContainer>
            <HeroText>
                <Title>Unlock your potential with Skill Stream: where Educators and Learners thrive</Title>
                <SubTitle>Join Skill Stream to bridge the gap between educators and learners, where educators can showcase their expertise to a global audience while learners discover personalized, enriching educational experiences.</SubTitle>

                <div>
                    <Button>Explore Educators</Button>
                    <Button>Publish your services</Button>
                </div>
            </HeroText>

            {/* <img src={HeroPictureMobile} alt="laptop" /> */}
        </HeroContainer>
    );
}

export default Hero;