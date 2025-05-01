import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={
      { isAuth, 
        setIsAuth: setIsAuth
      }
    }>
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter></AppRouter>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}
//yarn start / npm start / cd react-app

export default App;
