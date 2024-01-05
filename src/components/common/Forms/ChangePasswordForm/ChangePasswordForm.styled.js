import styled from "styled-components";
import { Field, ErrorMessage, Form } from "formik";

export const Section = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding-top: 80px;
  }

  @media screen and (min-width: ${(props) => props.theme.sizes.desk}) {
    padding-top: 100px;
    padding-bottom: 200px;
  }
`;

export const ChangePasswordFormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 408px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
    width: 578px;
  }
`;

export const FormDescr = styled.p`
  text-align: center;
  margin-bottom: 24px;
  width: 358px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
    width: 408px;
  }
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 358px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
    width: 408px;
  }
`;

export const InputBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;

  @media screen and (min-width: ${(props) => props.theme.sizes.tablet}) {
    margin-bottom: 48px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 13px;
`;

export const Input = styled(Field)`
  height: 48px;
  border: 1px solid ${(props) => {
      if (props.border) {
          return props.theme.colors.error;
      }
      return props.theme.colors.disabled;
  }};
  border-radius: 6px;
  padding-left: 16px;
  font-size: 18px;
`;

export const Error = styled(ErrorMessage)`
  color: ${(props) => props.theme.colors.error};
`;

export const InputIconShow = styled.span`
  position: absolute;
  top: 44px;
  right: 12px;
`;
