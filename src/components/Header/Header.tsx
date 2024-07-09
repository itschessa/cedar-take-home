import { Logo, PageHeader } from "./styles";
import logo from "../../assets/ABC-Logo.svg";

function Header() {
  return (
    <PageHeader>
      <Logo src={logo} alt="ABC Health System logo" />
    </PageHeader>
  );
}

export { Header };
