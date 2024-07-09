import styled from "styled-components";
import { FormSection } from "../../../components/FormSection/FormSection";
import { FlexColumn } from "../../../shared/mixins";
import { Styles } from "../../../shared/tokens";

const PaymentSection = styled(FormSection)`
  border-bottom: 1px solid ${Styles.color.gray};
`;

const FormBody = styled.form`
  ${FlexColumn}
  gap: 16px;
`;

const TwoColumn = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

export { PaymentSection, FormBody, TwoColumn };
