
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
      <div className="flex-grow w-full flex justify-center">
        <div className="flex w-full max-w-[1700px] justify-center gap-8 px-4 sm:px-6 lg:px-8">
          
          {/* Left Ad Placeholder */}
          <aside className="hidden 2xl:block w-40 flex-shrink-0 py-8">
            <div className="sticky top-24 h-[600px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm shadow-md border border-gray-300">
              <span className="transform -rotate-90 whitespace-nowrap">Advertisement</span>
            </div>
          </aside>

          {/* Original main content structure */}
          <main className="w-full max-w-screen-xl py-8">
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tool/:id" element={<DetailPage />} />
              <Route path="/compare/:id1" element={<ComparePage />} />
              <Route path="/compare/:id1/vs/:id2" element={<ComparePage />} />
            </Routes>
          </main>

          {/* Right Ad Placeholder */}
          <aside className="hidden 2xl:block w-40 flex-shrink-0 py-8">
            <div className="sticky top-24 h-[600px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm shadow-md border border-gray-300">
              <span className="transform -rotate-90 whitespace-nowrap">Advertisement</span>
            </div>
          </aside>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
