// App.js
import React, {useContext} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ListePosts from "./components/ListePosts";
import DetailPost from "./components/DetailPost";
import AjouterPost from "./components/AjouterPost";
import ModifierPost from "./components/ModifierPost";
import {PostContext, PostProvider} from "./context/PostContext";

function AppContent() {
  const {theme} = useContext(PostContext);

  return (
    <Router>
      <div className={`min-h-screen ${theme === "dark" ? "dark" : ""}`}>
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<ListePosts />} />
              <Route path="/post/:id" element={<DetailPost />} />
              <Route path="/ajouter" element={<AjouterPost />} />
              <Route path="/modifier/:id" element={<ModifierPost />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <PostProvider>
      <AppContent />
    </PostProvider>
  );
}

export default App;
