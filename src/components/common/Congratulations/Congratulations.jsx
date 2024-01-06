import { Icon } from '../Icon';
import { Button, Title, Message } from '../../common';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Section, SuccessWrapper } from './Congratulations.styled';


export const Congratulations = () => {
    const location = useLocation();
    const backMainPage = useRef(location.state?.from ?? '/');
    console.log(location.state);
    let buttonText = 'Back to main page';


    const setMessageField = () => {
        let message;
        
        switch (location.state) {
            case '/reset-password':
                message = 'We sent the letter to your mail. Check and confirm the reset of your password!';
                break;
            case '/change-email':
                message = 'Your new email has been set';
                break;
            case '/create-password':
                message = 'New password has been created!';
                buttonText = 'Go to Login';
                break;            
            default:
                break;
        }
        
        return message;
    };

    return (
        <Section>
            <SuccessWrapper>
                <Title
                    indent={32}
                >
                    Congratulations!
                </Title>

                <Icon
                    name={'success'}
                    size={120}
                />

                <Message
                    indentTop={24}
                    indentBottom={48}
                >
                    {setMessageField()}
                </Message>

                <Button size='fluid' type='button'>
                    <Link to={
                        location.state === '/create-password' 
                            ? '/login'
                            : backMainPage.current
                    }>
                        {buttonText}
                    </Link>
                </Button>
            </SuccessWrapper>
        </Section>
    );
};