import React from 'react';
import { pdfTools } from '../data/tools';
import RankingSection from '../components/RankingSection';
import { Link } from 'react-router-dom';

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);

const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m12 9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v9z" /></svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
);

const GiftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H9.375A2.625 2.625 0 1012 4.875z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 11.25h16.5" />
    </svg>
);

const HomePage: React.FC = () => {
  const visitorRanking = [...pdfTools].sort((a, b) => b.visitors - a.visitors).slice(0, 10);
  const recommendedTool = visitorRanking.length > 0 ? visitorRanking[0] : null;

  const priceRanking = [...pdfTools].filter(t => t.price > 0).sort((a, b) => a.price - b.price).slice(0, 10);
  const ratingRanking = [...pdfTools].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const freeRanking = [...pdfTools].filter(t => t.price === 0).sort((a, b) => b.visitors - a.visitors).slice(0, 10);

  return (
    <div className="space-y-12">
      {recommendedTool && (
        <section className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 lg:p-12 order-2 md:order-1">
                    <h2 className="text-sm font-bold uppercase text-indigo-600 tracking-wider">Today's Recommendation</h2>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2">{recommendedTool.name}</h1>
                    <p className="mt-4 text-lg text-slate-600">{recommendedTool.description}</p>
                    <Link to={`/tool/${recommendedTool.id}`} className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                        Learn More
                    </Link>
                </div>
                <div className="order-1 md:order-2">
                    <img src={recommendedTool.imageUrl} alt={recommendedTool.name} className="w-full h-64 md:h-full object-cover" />
                </div>
            </div>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <RankingSection title="Visitor Ranking" tools={visitorRanking} icon={<BarChartIcon />} />
        <RankingSection title="Free Ranking" tools={freeRanking} icon={<GiftIcon />} />
        <RankingSection title="Price Ranking" tools={priceRanking} icon={<CurrencyDollarIcon />} />
        <RankingSection title="Rating Ranking" tools={ratingRanking} icon={<StarIcon />} />
      </div>
    </div>
  );
};

export default HomePage;