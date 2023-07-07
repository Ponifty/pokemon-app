import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import PokemonPage from "./components/PokemonPage";
import ErrorBoundary from "./context/ErrorBoundary";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error...</div>}>
      <ThemeProvider>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/" element={<PokemonPage />} />
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
