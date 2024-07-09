import styled from "styled-components";
import { FlexColumn } from "../../shared/mixins";

const FormBody = styled.div`
  ${FlexColumn}
  padding: 0 48px 32px 48px;
  gap: 24px;

  @media screen and (max-width: 768px) {
    padding: 0 32px 32px 32px;
  }
`;

export { FormBody };
