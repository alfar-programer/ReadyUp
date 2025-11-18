import React from "react";
import AppRoutes from "./Routes/routes";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
