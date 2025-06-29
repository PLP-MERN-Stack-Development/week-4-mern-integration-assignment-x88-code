import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./services/pages/home";
import CreatePost from "./services/pages/createpost";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
