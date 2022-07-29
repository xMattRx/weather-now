import React from "react";
import { Container } from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
