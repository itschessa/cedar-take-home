import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { Text, FlexColumn, HeadingText, TextProps } from "../../shared/mixins";
import { Styles } from "../../shared/tokens";

const CONTENT_WIDTH = 376;

const Content = styled.div`
  ${FlexColumn}
  flex: 1;
  width: ${CONTENT_WIDTH}px;
  align-self: center;
  justify-content: center;
  gap: 16px;
`;

const Header = styled.h1`
  ${HeadingText}
`;

const Description = styled.p<TextProps>`
  ${Text}
`;

const Footer = styled.div`
  ${FlexColumn}
  align-items: center;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border: 1px solid ${Styles.color.white};
  background-color: ${Styles.color.white};
  height: 419px;
  padding: 32px;
  gap: 24px;
`;

const FooterText = styled.p`
  width: ${CONTENT_WIDTH}px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.p<TextProps>`
  ${Text}
`;

const AmountDue = styled.p`
  ${HeadingText}
`;

const PayButton = styled(Button)`
  width: ${CONTENT_WIDTH}px;
`;

export {
  Content,
  Footer,
  Header,
  Description,
  FooterText,
  Total,
  AmountDue,
  PayButton,
};
