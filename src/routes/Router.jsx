import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../Pages/Landing";
import Text from "../Pages/Text";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Chat" element={<Text/>} />
    </Routes>
  );
};

export default Router;