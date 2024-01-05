import PropTypes from 'prop-types';
import { StyledButton, StyledIcon, StyledText } from './Button.styled';

export const Button = ({
    children,
    icon,
    variant,
    isDisabled,
    size,
    onClick,
    iconPosition,
    type
}) => {
    return (
        <StyledButton
            disabled={isDisabled}
            onClick={onClick}
            size={size}
            variant={variant}
            type={type}
        >
            {icon && <StyledIcon position={iconPosition} name={icon} />}
            <StyledText>{children}</StyledText>
        </StyledButton>
    );
};

Button.propTypes = {
    ...StyledButton.propTypes,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    iconPosition: StyledIcon.propTypes.position,
    type: PropTypes.oneOf(['submit', 'button']).isRequired,
    icon: PropTypes.string,
};

Button.defaultProps = {
    ...StyledButton.defaultProps,
    iconPosition: 'left',
    icon: null,
};