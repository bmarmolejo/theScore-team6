import { useState } from "react";

import "./App.scss";
import Points from "./pages/Points/Points";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/points" element={<Points />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
