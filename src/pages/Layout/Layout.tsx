import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Main } from "./styles";

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export { Layout };
