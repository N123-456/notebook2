import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
//import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Memos from "./memofunction/Memos";
import Parent from "./memofunction/Parent";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar/>
          
          <div className="container">
          <Routes>
            <Route path="/" element={<AddNote/>} />
            <Route path="about/" element={<About/>} />
            <Route path="memo/" element={<Memos/>} />
            <Route path="/parent" element={<Parent/>} />
            <Route path="signup/" element={<Signup />} />
            <Route path="login/" element={<Login/>} />
           
          </Routes>
          </div>
        </Router>
        {/* <Notes/> */}
        {/* <Alert/> */}
      </NoteState>
     
    </>
  );
}

export default App;
