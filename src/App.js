import { BrowserRouter, Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import ReactDOM from "react-dom/client";
import JobsDesc from "./pages/JobsDesc";
import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" component={Career} exact />
      <Route path="/:id" component={JobsDesc} />
    </div>
  );
}
export default App;
