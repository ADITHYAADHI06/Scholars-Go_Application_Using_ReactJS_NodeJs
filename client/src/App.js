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
import Java from "./components/StydyPages/Java"
import Python from "./components/StydyPages/Python"
import InterView from "./components/StydyPages/InterView"
import Apptitude from "./components/StydyPages/Apptitude"
import Dsa from "./components/StydyPages/DSA"
import JavaScript from "./components/StydyPages/JavaScript";


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


        <Route path="/study/Python" element={<Python />}></Route>
        <Route path="/study/JavaScript" element={<JavaScript />}></Route>
        <Route path="/study/Interview_special" element={<InterView />}></Route>
        <Route path="/study/Apptitude" element={<Apptitude />}></Route>
        <Route path="/study/Java" element={<Java />}></Route>
        <Route path="/study/DSA" element={<Dsa />}></Route>



        {/*  Error Page  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
