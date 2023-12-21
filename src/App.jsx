import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element="Main Page" />
        <Route path="/:productId" element="Specific Product" />
      </Routes>

      <h1>Main Page</h1>
    </>
  );
}

export default App;
