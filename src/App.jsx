import { useState } from "react";
import "./App.scss";
import Points from "./pages/Points/Points";
import PrizePage from "./pages/PrizePage/PrizePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Quiz from "./components/Quiz/Quiz";


function App() {
 return (
   <>
     <BrowserRouter>
       <Routes>
         <Route path="/points" element={<Points />} />
         <Route path="/leaderboard" element={<Leaderboard/>}/>
         <Route path="/prize" element={<PrizePage />} />
         <Route path="/workout" element={<WorkoutPage />} />
         <Route path="/" element={<Dashboard />} />
         <Route path="/quiz" element={<Quiz />} />
       </Routes>
     </BrowserRouter>
   </>
 );
}


export default App;
