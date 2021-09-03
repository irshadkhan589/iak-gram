import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route} from 'react-router-dom'
import "./App.css"
import Home from "./components/screen/Home"
import Login from "./components/screen/Login"
import Profile from "./components/screen/Profile"
import SignUp from "./components/screen/SignUp"
import CreatePost from "./components/screen/CreatePost";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/Login">
            <Login/>
        </Route>
        <Route path="/Profile">
            <Profile/>
        </Route>
        <Route path="/SignUp">
            <SignUp/>
        </Route>
        <Route path="/create">
            <CreatePost/>
        </Route>
    </BrowserRouter>

  );
}

export default App;
