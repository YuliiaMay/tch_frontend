import { useAuthStore } from '../../../store/auth';
import { Icon } from "../../common";
import { LogoutBtn } from "./LogoutButton.styled";


const LogoutButton = () => {
    const { logout } = useAuthStore();

    return (
        <LogoutBtn
            type='button'
            onClick={logout}
        >
            <span>Log out</span>
            <Icon
                name='logout'
                size={24}
            />
        </LogoutBtn>
    );
};


export default LogoutButton;