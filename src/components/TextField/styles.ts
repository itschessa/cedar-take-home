import styled, { css } from "styled-components";
import { FlexColumn, TextProps, Text } from "../../shared/mixins";
import { Styles } from "../../shared/tokens";
import errorIcon from "../../assets/alert-circle.svg";
import successIcon from "../../assets/check.svg";
import { ValidationStatus } from "../../pages/Payment/PaymentInformation/types";

interface InputProps {
  $validationStatus: ValidationStatus;
}

const Container = styled.div`
  ${FlexColumn}
  flex: 1;
  gap: 8px;
  text-align: left;
`;

const Label = styled.label<TextProps>`
  ${Text}
  color: ${Styles.color.tertiaryText};
`;

const Input = styled.input<InputProps>`
  height: 48px;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid ${Styles.color.border};
  border-radius: 8px;
  background-position: right 16px center;
  background-size: 24px;
  background-repeat: no-repeat;

  ${({ $validationStatus }) => {
    if ($validationStatus === ValidationStatus.Invalid) {
      return css`
        border-color: ${Styles.color.error};
        background-image: url("${errorIcon}");
      `;
    }
    if ($validationStatus === ValidationStatus.Valid) {
      return css`
        background-image: url("${successIcon}");
      `;
    }
  }}
`;

const ErrorText = styled.p<TextProps>`
  ${Text}
  color: ${Styles.color.error};
`;

export { Container, Label, Input, ErrorText };
