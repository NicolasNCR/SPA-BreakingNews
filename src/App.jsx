import "./App.css";
import { GlobalStyled } from "./GlobalStyled";
import Home from "./pages/Home/Home";

function App() {
// Código JS

  return (
    // Código HTML com JS
    <>
    <GlobalStyled /> {/* Tudo abaixo do GlobalStyled receberá o CSS global */}
    <Home />
    </>
  )
}

export default App