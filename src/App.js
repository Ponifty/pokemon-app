import { Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Error...</div>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
