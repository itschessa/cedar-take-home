import styled from "styled-components";
import { SlideAnimation } from "../../../shared/mixins";
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

export { ReviewSection };
