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
import SubscriptionPage from "./pages/SubscriptionPage";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edd" element={<Editer />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/propos" element={<AboutPage />} />
          <Route path="/generate" element={<GenerateDesign />} />
          <Route path="/design/:id" element={<DesignDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;