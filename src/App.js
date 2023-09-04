import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d2024";
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text to analyze " mode={mode} />}></Route>
        </Routes>
        {/* <About></About> */}
      </Router>
    </div>
  );
}

export default App;
