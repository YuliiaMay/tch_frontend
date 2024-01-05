import { Icon } from '../Icon';
import { Button, Title, Message } from '../../common';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Section, SuccessWrapper } from './Congratulations.styled';


export const Congratulations = () => {
    const location = useLocation();
    const backMainPage = useRef(location.state?.from ?? '/');
    
    const setMessageField = () => {
        const message = location.state === '/reset-password'
            ? 'We sent the letter to your mail. Check and confirm the reset of your password!'
            : 'Your new email has been set';
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
                    <Link to={backMainPage.current}>Back to main page</Link>
                </Button>
            </SuccessWrapper>
        </Section>
    );
};