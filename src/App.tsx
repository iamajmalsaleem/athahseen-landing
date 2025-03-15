import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/athahseen-landing">
      <div className="min-h-screen bg-white">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
