import styled from "styled-components";
import { Styles } from "../../shared/tokens";

const Container = styled.div`
  width: 576px;
  height: fit-content;
  border-radius: 16px;
  padding: 16px 0;
  background-color: ${Styles.color.white};
  align-self: center;
  margin: 32px 0;

  @media screen and (max-width: ${Styles.screenSize.mobile}) {
    width: 100%;
    border-radius: 0;
    margin-top: 0;
    padding: 0;
  }
`;

export { Container };
