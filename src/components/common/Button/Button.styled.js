import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { inlineFlex } from "../../../styles/mixins";
import { Icon } from "../Icon";

export const StyledIcon = styled(Icon)`
  transition: fill 0.2s ease-in-out;
  flex-shrink: 0;
  ${(props) =>
    props.position === "right"
      ? css`
          order: 2;
          margin-left: 10px;
        `
      : css`
          margin-right: 10px;
        `}
`;

StyledIcon.propTypes = {
  name: Icon.propTypes.name,
  position: PropTypes.oneOf(["left", "right"]),
};

export const StyledButton = styled.button`
  cursor: pointer;
  ${inlineFlex("center", "center")}
  &:disabled {
    cursor: not-allowed;
    background-color: #c7c7c7;
  }
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background: ${props.theme.colors.lightBlue};
          border-radius: 10px;
          border: none;
          transition: all 0.2s ease-in-out;
          &:not(:disabled):hover {
            background: ${props.theme.colors.blue};
          }
          &:not(:disabled):active {
            background: ${props.theme.colors.darkBlue};
          }
          &:disabled {
            background-color: ${props.theme.colors.disabled};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.white};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.white};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.white};
          }
        `;
      case "secondary":
        return css`
          background-color: ${props.theme.colors.white};
          border-radius: 10px;
          border: 1px solid ${props.theme.colors.lightBlue};
          transition-property: border-color, background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          &:not(:disabled):hover {
            background-color: ${props.theme.colors.blue};
            border-color: ${props.theme.colors.blue};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          &:not(:disabled):active {
            background-color: ${props.theme.colors.darkBlue};
            border-color: ${props.theme.colors.darkBlue};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          &:disabled {
            border-color: ${props.theme.colors.disabled};
            background-color: ${props.theme.colors.disabled};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.lightBlue};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.lightBlue};
          }
        `;
      case "tertiary":
        return css`
          background-color: ${props.theme.colors.golden};
          border-radius: 10px;
          transition-property: background-color;
          transition-duration: 0.2s;
          transition-timing-function: ease-in-out;
          &:not(:disabled):hover {
            background-color: ${props.theme.colors.lightGolden};
            ${StyledText} {
              color: ${props.theme.colors.blue};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          &:not(:disabled):active {
            background-color: ${props.theme.colors.clickedYellow};
            ${StyledText} {
              color: ${props.theme.colors.white};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.white};
            }
          }
          &:disabled {
            background-color: ${props.theme.colors.disabledBgn};
            ${StyledText} {
              color: ${props.theme.colors.disabled};
            }
            ${StyledIcon} {
              fill: ${props.theme.colors.disabled};
            }
          }
          ${StyledText} {
            color: ${props.theme.colors.blue};
          }
          ${StyledIcon} {
            fill: ${props.theme.colors.blue};
          }               
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "standard":
        return css`
          height: 56px;
          width: 200px;
          padding: 0 12px;
          ${StyledText} {
            font-family: Nunito Sans;
            font-size: 18px;
            font-weight: 600;
          }
          ${StyledIcon} {
            width: 24px;
            height: 24px;
          }
        `;
      case "fluid":
        return css`
          height: 48px;
          min-width: 100%;
          ${StyledText} {
            font-family: Nunito Sans;
            font-size: 18px;
            font-weight: 600;
          }
          ${StyledIcon} {
            width: 24px;
            height: 24px;
          }
        `;
      case "filter":
        return css`
          height: 35px;
          min-width: auto;
          padding: 5px 10px;
          ${StyledText} {
            font-family: Nunito Sans;
            font-size: 18px;
            font-weight: 400;
          }
          ${StyledIcon} {
            width: 24px;
            height: 24px;
          }
        `;      
    }
  }}
`;

StyledButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", 'tertiary']),
  size: PropTypes.oneOf(["standard", "fluid", "filter"]),
};

StyledButton.defaultProps = {
  variant: "primary",
  size: "standard",
};

export const StyledText = styled.span`
  transition: color 0.2s ease-in-out;
`;
