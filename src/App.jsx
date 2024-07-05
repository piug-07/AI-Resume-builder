/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
