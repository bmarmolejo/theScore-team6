import { useState } from "react";
import "./App.scss";
import Points from "./pages/Points/Points";
import PrizePage from "./pages/PrizePage/PrizePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/points" element={<Points />} />
          <Route path="/prize" element={<PrizePage />} />
          <Route path="/workout" element={<WorkoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
