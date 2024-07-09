import styled from "styled-components";
import { FormSection } from "../../../components/FormSection/FormSection";
import { Styles } from "../../../shared/tokens";

const PaymentSection = styled(FormSection)`
  border-bottom: 1px solid ${Styles.color.gray};
`;

export { PaymentSection };
