import "./index.css";
import { Routes, Route } from "react-router-dom";
import Myportfolio from "./components/Myportfolio";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Myportfolio />} />
      </Routes>
    </div>
  );
}

export default App;
