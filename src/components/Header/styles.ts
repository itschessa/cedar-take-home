import { styled } from "styled-components";
import { Styles } from "../../shared/tokens";

const PageHeader = styled.header`
  display: flex;
  padding: 0 16px;
  align-items: center;
  height: 80px;
  min-height: 80px;
  border-bottom: 1px solid ${Styles.color.gray};
  background-color: ${Styles.color.white};
`;

const Logo = styled.img`
  height: 40px;
`;

export { PageHeader, Logo };
