import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Payment } from "./pages/Payment/Payment";
import { ThankYou } from "./pages/ThankYou/ThankYou";
import { Home } from "./pages/Home/Home";

// TODO add error boundary, nomatch
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="thank-you" element={<ThankYou />} />

        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App
