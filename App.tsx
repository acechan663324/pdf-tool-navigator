
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import ComparePage from './pages/ComparePage';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tool/:id" element={<DetailPage />} />
          <Route path="/compare/:id1" element={<ComparePage />} />
          <Route path="/compare/:id1/vs/:id2" element={<ComparePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;