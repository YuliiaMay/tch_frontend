import { Link, Outlet } from 'react-router-dom';
import { Button, Title } from '../../common';
import {
    Section,
    SettingsContainer,
    StyledLinkToPage,
} from './MyAdvertsContainer.styled';
import { Suspense } from 'react';



const MyAdvertsContainer = () => {
    return (
        <Section>
            <Title>Your Advertisements</Title>

            <SettingsContainer>
                <div>
                    <StyledLinkToPage to='active'>Active <span>()</span></StyledLinkToPage>
                    <StyledLinkToPage to='in-review'>In review</StyledLinkToPage>
                </div>
                <Link to='/add-advert'>
                    <Button
                        type='button'
                        size='standard'
                        variant='tertiary'
                    >
                        Create advertisemtent
                    </Button>                
                </Link>
            </SettingsContainer>

            <Suspense>
                <Outlet/>
            </Suspense>
        </Section>
        
    );
};

export default MyAdvertsContainer;