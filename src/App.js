import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import PokemonPage from "./components/PokemonPage";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error...</div>}>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<PokemonPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
