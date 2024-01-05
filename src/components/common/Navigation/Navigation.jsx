import { LinkHeader } from '../../common/Link';
import { StyledNavContainer, StyledNav } from './Navigation.styled';
import { PropTypes } from 'prop-types';

export const Navigation = ({ className }) => {
    return (
        <StyledNavContainer className={className}>
            <StyledNav className='nav-list' >
                <LinkHeader to='/courses' >Teachers</LinkHeader>
                <LinkHeader to='/my-advert' >My advertisements</LinkHeader>
                <LinkHeader to='/profile' >My profile</LinkHeader>
            </StyledNav>
        </StyledNavContainer >
    );
}

Navigation.propTypes = {
    className: PropTypes.string,
};