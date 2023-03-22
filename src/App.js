import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Career />}>
          <Route path="/jobDescription" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
