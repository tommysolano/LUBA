import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/login";
import Register from "./pages/register";
import Secret from "./pages/secret";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/" element={<Secret/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
