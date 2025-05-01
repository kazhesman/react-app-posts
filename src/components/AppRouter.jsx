import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes} from '../router';
import { AuthContext } from '../context';

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);
  // console.log(isAuth)
  // const isAuth = true;
  // return (
  //   isAuth ?
  //   <Routes>
  //   {privateRoutes.map(route => 
  //     <Route path={route.path} element={route.element} />
  //   )}
  //   <Route path="*" element={<Navigate to="/posts" />} />
  //   </Routes>
  //   :
  //   <Routes>
  //   {publicRoutes.map(route => 
  //     <Route path={route.path} element={route.element} />
  //   )}
  //   <Route path="*" element={<Navigate to="/login" />} />
  //   </Routes>
  // )
  return (
    <Routes>
      {(isAuth ? privateRoutes : publicRoutes).map(route => 
        <Route key={route.path} path={route.path} element={route.element}/>
      )}
      
      {/* Редирект по умолчанию */}
      <Route
        path="*"
        element={<Navigate to={isAuth ? "/posts" : "/login"} replace/>}
      />
    </Routes>
  );
}

export default AppRouter;

/* <Route path="/about" element={<About />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<PostIdPage />} />
    <Route path="*" element={<Posts />}></Route> */