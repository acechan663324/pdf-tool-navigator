
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { pdfTools } from '../data/tools';
import StarIcon from '../components/icons/StarIcon';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const AiInsightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);


const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = pdfTools.find(p => p.id === Number(id));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tool) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Tool not found</h1>
        <p className="mt-4 text-slate-600">The tool you are looking for does not exist.</p>
        <Link to="/" className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700">
            Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      {/* 1. Website Preview Image */}
      <img src={tool.imageUrl} alt={tool.name} className="w-full h-96 object-cover object-top" />
      
      <div className="p-6 sm:p-10">
        {/* 2. Website Name */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 text-center">{tool.name}</h1>

        {/* 3. Action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <a 
              href={tool.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Visit Website
            </a>
            <Link 
              to={`/compare/${tool.id}`}
              className="inline-block bg-white text-indigo-600 border border-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-indigo-50 transition-colors transform hover:scale-105"
            >
              Compare this website
            </Link>
        </div>

        {/* 4. Rating */}
        <div className="flex items-center justify-center mt-6">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-7 h-7 ${i < Math.round(tool.rating) ? 'text-amber-400' : 'text-gray-300'}`} />
          ))}
          <span className="ml-3 text-2xl font-bold text-slate-700">{tool.rating.toFixed(1)}</span>
        </div>

        {/* 5. Description */}
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">{tool.longDescription}</p>

        {/* 6. AI Insight */}
        {tool.aiInsight && (
            <div className="mt-8 px-6 py-6 bg-slate-50 rounded-lg max-w-3xl mx-auto">
                <div className="flex items-center justify-center">
                    <AiInsightIcon />
                    <h3 className="ml-3 text-lg font-semibold text-slate-800">AI Insight</h3>
                </div>
                <p className="mt-3 text-slate-600 whitespace-pre-line text-center">{tool.aiInsight}</p>
            </div>
        )}

        {/* 7. Plans & Pricing */}
        {tool.pricingPlans && tool.pricingPlans.length > 0 && (
          <div className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Plans & Pricing</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${tool.pricingPlans.length > 2 ? 'lg:grid-cols-3' : ''} gap-8 max-w-5xl mx-auto`}>
              {tool.pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-lg border p-6 flex flex-col ${plan.isFeatured ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-slate-200 bg-slate-50/50'}`}>
                  <h3 className="text-xl font-semibold text-slate-800">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-sm text-slate-500 ml-1">{plan.billingInfo}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2 h-5">
                    {plan.isFeatured ? "Most popular" : ""}
                  </p>

                  <ul className="mt-6 space-y-3 text-slate-600 flex-grow">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircleIcon />
                        <span className="ml-3 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPage;