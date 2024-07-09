import styled from "styled-components";
import { Text, TextProps } from "../../shared/mixins";
import { Styles } from "../../shared/tokens";

const StyledButton = styled.button<TextProps>`
  ${Text}

  background-color: ${Styles.color.primaryBlue};
  color: ${Styles.color.white};
  padding: 12px 40px;
  border-radius: 12px;
`;

export { StyledButton };
