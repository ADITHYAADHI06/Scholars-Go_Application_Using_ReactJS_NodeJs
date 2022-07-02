import "./App.css";
// import "./node_modules/bootstarp/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Study from "./components/Study";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ErrorPage from "./components/ErrorPage";
import Java from "./components/Java"
import Python from "./components/Python"
import Css from "./components/Java"
import InterView from "./components/InterView"
import Apptitude from "./components/Apptitude"
import Data from "./components/Data"


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/study" element={<Study />}></Route>



        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<Registration />}></Route>


        <Route path="/Python" element={<Python />}></Route>
        <Route path="/Css" element={<Css />}></Route>
        <Route path="/Interview_special" element={<InterView />}></Route>
        <Route path="/Apptitude" element={<Apptitude />}></Route>
        <Route path="/Java" element={<Java />}></Route>
        <Route path="/Data" element={<Data />}></Route>



        {/*  Error Page  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
