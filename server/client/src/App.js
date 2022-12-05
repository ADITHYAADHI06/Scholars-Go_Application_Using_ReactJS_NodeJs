import "./App.css";
import { useEffect } from "react";
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
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";
import Footer from "./components/StydyPages/Footer";


//Todo: 1. ContextAPI
export const UserContext = createContext();

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>

      <Route path="/about" element={<About />}></Route>

      <Route path="/study" element={<Study />}></Route>

      <Route path="/contact" element={<Contact />}></Route>

      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<Registration />}></Route>

      <Route path="/logout" element={<Logout />}></Route>

      <Route path="/study/Python" element={<Python />}></Route>
      <Route path="/study/JavaScript" element={<JavaScript />}></Route>
      <Route path="/study/Interview" element={<InterView />}></Route>
      <Route path="/study/Apptitude" element={<Apptitude />}></Route>
      <Route path="/study/Java" element={<Java />}></Route>
      <Route path="/study/DSA" element={<Dsa />}></Route>

      {/*  Error Page  */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  // Todo: With the help of UseContext we call dispacth, when ever dispacth get called , in reducer action get trigered according to action we get playload
  // console.log(`state ${state}`);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(state));
  }, [state])

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
        {/* <Footer /> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
