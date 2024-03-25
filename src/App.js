import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import noteContext from "./context/notes/noteContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Notes from "./components/Notes";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about/" element={<About />} />
          </Routes>
          </div>
        </Router>
        <Notes/>
      </NoteState>
     
    </>
  );
}

export default App;
