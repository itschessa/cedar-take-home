import styled from "styled-components";
import {
  TextProps,
  Text,
  FlexColumn,
  SlideAnimation,
} from "../../../shared/mixins";
import { FormSection } from "../../../components/FormSection/FormSection";
import { Styles } from "../../../shared/tokens";

const ReviewSection = styled(FormSection)`
  animation-name: ${SlideAnimation};
  animation-timing-function: ease-out;
  animation-duration: 300ms;

  @media screen and (max-width: ${Styles.screenSize.mobile}) {
    border-bottom: 1px solid ${Styles.color.gray};
  }
`;

const ReviewContent = styled.div`
  ${FlexColumn}
  text-align: left;
  gap: 13px;
`;

const ReviewText = styled.p<TextProps>`
  ${Text}
`;

const PaymentMethod = styled(ReviewText)`
  color: ${Styles.color.tertiaryText};
`;

const PaymentInfo = styled.div`
  ${FlexColumn}
  padding: 16px 0;
  gap: 4px;
`;

export { ReviewSection, ReviewContent, ReviewText, PaymentInfo, PaymentMethod };
