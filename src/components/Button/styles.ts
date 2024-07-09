import styled, { css } from "styled-components";
import { Text, TextProps } from "../../shared/mixins";
import { Variant } from "./types";
import { Styles } from "../../shared/tokens";

interface ButtonProps extends TextProps {
  $variant: `${Variant}`;
}

const PrimaryButtonStyles = css`
  background-color: ${Styles.color.primaryBlue};
  color: ${Styles.color.white};
  padding: 12px 40px;
  border-radius: 12px;
`;

const TextButtonStyles = css`
  color: ${Styles.color.primaryBlue};
  background-color: transparent;
  padding: 0;

  &:hover {
    border-color: transparent;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  ${Text}

  ${({ $variant }) =>
    $variant === Variant.Primary ? PrimaryButtonStyles : TextButtonStyles}
`;

export { StyledButton };
