// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ChatbotPage from "./pages/ChatbotPage";
import Gallery from "./pages/Gallery";
import GenerateDesign from "./pages/GenerateDesign";
import Home from "./pages/Home";
import DesignDetails from "./pages/DesignDetails"
import Editer from "./pages/EditorPage";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edd" element={<Editer />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/generate" element={<GenerateDesign />} />
          <Route path="/design/:id" element={<DesignDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;