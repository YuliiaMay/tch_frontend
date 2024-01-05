import { useEffect, useRef, useState } from 'react';
import { StyledContainer, StyledFixed, StyledNavigation } from './Header.styled';
import { Logo, Burger } from '../../../common';
import { AuthButtonsGroup } from '../../../AuthButtonsGroup';
import { useAuthStore } from '../../../../store/auth';


export const Header = () => {
    const headerRef = useRef(null);
    const { isAuth } = useAuthStore();

    useEffect(() => {
        const scrollHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add('scroll');
            } else {
                headerRef.current.classList.remove('scroll');
            }
        };
        window.addEventListener('scroll', scrollHeader);
        return () => {
            window.removeEventListener('scroll', scrollHeader);
        };
    }, []);

    // Burger
    const [isOpened, setIsOpen] = useState(false);
    const handleBurgerClick = () => {
        setIsOpen(!isOpened);
    };

    return (
        <>
            <StyledContainer >
                <StyledFixed ref={headerRef}>
                    {isOpened ? (
                        <Logo variant='footer' />
                    ) : (
                        <Logo variant='header' />
                    )}
                    <StyledNavigation className='navigation' isOpen={isOpened} />
                    {
                        !isAuth && <AuthButtonsGroup />
                    }
                    
                </StyledFixed>
            </StyledContainer>
            <Burger onClick={handleBurgerClick} isOpen={isOpened} />
        </>

    );
}

