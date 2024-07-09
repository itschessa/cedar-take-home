import styled, { css } from "styled-components";
import { Text, TextProps } from "../../shared/mixins";
import { Styles } from "../../shared/tokens";
import { Status } from "./types";

interface CommonProps {
  $status: `${Status}`;
}

type ContainerProps = TextProps & CommonProps;

const Container = styled.header<ContainerProps>`
  ${Text}
  height: 24px;
  padding: 20px 32px 20px 48px;
  display: flex;
  gap: 16px;
  font-size: 20px;

  ${({ $status }) =>
    $status === Status.Disabled &&
    css`
      opacity: 0.5;
    `}

  @media screen and (max-width: 768px) {
    padding: 20px 24px 20px 32px;
  }
`;

const SectionNumber = styled.span<CommonProps>`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  ${({ $status }) => {
    if ($status === Status.Active) {
      return css`
        background-color: ${Styles.color.primaryBlue};
        color: ${Styles.color.white};
      `;
    }

    return css`
      background-color: ${Styles.color.gray};
      color: ${Styles.color.tertiaryText};
    `;
  }}
`;

export { Container, SectionNumber };
