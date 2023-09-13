import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./style/main.css";

const App = function () {
  return (
    <main className="main_container">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
