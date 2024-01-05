import { useAuthStore } from '../../../store/auth';
import Avatar from '../../../assets/images/default-avatar.png';
import {
    Wrapper,
    UserInfoContainer,
    StyledAvatar,
    UserInfo
} from './PersonalInfo.styled';


const PersonalInfo = () => {
    const { user } = useAuthStore();

    return (
        <Wrapper>
            {
                user && (
                    <UserInfoContainer>
                        <StyledAvatar src={Avatar} alt="user avatar" />
                        <UserInfo>
                            <span>{user.name}</span>
                            <span>{user.email}</span>
                        </UserInfo>
                    </UserInfoContainer>
                )
            }
        </Wrapper>
    );
};

export default PersonalInfo;