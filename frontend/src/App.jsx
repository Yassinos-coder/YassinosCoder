import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        <p>
          Developed with ❤️ by{" "}
          <a href="https://github.com/Yassinos-coder">Yassinos-Coder</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
