import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
