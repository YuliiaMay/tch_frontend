import {
    Wrapper,
    Separator,
    Line,
    OrText,
    AuthBtns,
    AuthLink
} from "./ExternalAuth.styled"
import { Icon } from "../../Icon";


export const ExternalAuth = () => {
    return (
        <Wrapper>
            <Separator>
                <Line />
                <OrText>or</OrText>
                <Line />
            </Separator>

            <AuthBtns>
                <AuthLink href="https://tudor-match.fly.dev/api/auth/google" >
                    <Icon name="google" size={18} />
                    Continue with Google
                </AuthLink>
                <AuthLink href="https://tudor-match.fly.dev/api/auth/facebook">
                    <Icon name="facebook" size={18} />
                    <span>Continue with Facebook</span>
                </AuthLink>
            </AuthBtns>
        </Wrapper>
    );
};

