import { Title } from '../../common';
import { LogoutButton } from '../LogoutButton';
import { PersonalInfo } from '../PersonalInfo';
import {
    Section,
    ContainerWrapper,
} from './ProfileContainer.styled';


const ProfileContainer = () => {
    

    return (
        <Section>
            <ContainerWrapper>
                <LogoutButton/>
                <Title>My profile</Title>
                <PersonalInfo />
            </ContainerWrapper>
        </Section>
    );
};

export default ProfileContainer;