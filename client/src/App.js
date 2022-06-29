import "./App.css";
// import "./node_modules/bootstarp/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<Registration />}></Route>

        {/*  Error Page  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
