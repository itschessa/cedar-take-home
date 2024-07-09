import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Main } from "./styles";

function Layout() {
  const { error, loading } = useContext(UserContext);

  // TODO make loading and error look nicer

  return (
    <>
      <Header />
      <Main>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong...</p>}
        {!loading && !error && <Outlet />}
      </Main>
    </>
  );
}

export { Layout };
