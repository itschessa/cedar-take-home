import { useContext } from "react";
import {
  AmountDue,
  Content,
  Description,
  Footer,
  FooterText,
  Header,
  PayButton,
  Total,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { formatCurrency } from "../../shared/util";

function Home() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  if (!userData) {
    return null;
  }

  const { firstName, billCount, totalDue } = userData;

  const handleClick = () => navigate("/payment");

  return (
    <>
      <Content>
        <Header>Hi, {firstName}</Header>
        <Description $size="small">
          You have {billCount} medical bills ready from ABC Health System. You
          can pay your bills here or verify your identity to view full bill
          details.
        </Description>
      </Content>
      <Footer>
        <FooterText>
          <Total $size="small" $bold>
            Total Due
          </Total>
          <AmountDue>{formatCurrency(totalDue)}</AmountDue>
        </FooterText>
        <PayButton onClick={handleClick}>Pay total</PayButton>
      </Footer>
    </>
  );
}

export { Home };
