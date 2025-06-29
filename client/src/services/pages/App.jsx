import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./services/pages/home";
import CreatePost from "./services/pages/createpost";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-gray-800 p-4 text-white shadow">
          <div className="max-w-4xl mx-auto flex space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/create" className="hover:underline">
              Create Post
            </Link>
          </div>
        </nav>

        <main className="flex-grow flex justify-center items-start p-4">
          <div className="w-full max-w-3xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreatePost />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
