import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { pdfTools } from '../data/tools';
import { aiComparisons } from '../data/comparisons';
import { PdfTool, PricingPlan } from '../types';
import StarIcon from '../components/icons/StarIcon';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const AiInsightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
    <div className={`rounded-lg border p-5 flex flex-col h-full ${plan.isFeatured ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-slate-200 bg-slate-50/50'}`}>
        <h3 className="text-lg font-semibold text-slate-800">{plan.name}</h3>
        <div className="mt-3">
            <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
            <span className="text-sm text-slate-500 ml-1">{plan.billingInfo}</span>
        </div>
        <p className="text-xs text-slate-500 mt-1 h-4">
            {plan.isFeatured ? "Most popular" : ""}
        </p>
        <ul className="mt-5 space-y-3 text-slate-600 flex-grow text-sm">
            {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start">
                    <CheckCircleIcon />
                    <span className="ml-2 leading-tight">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const FeatureList: React.FC<{ title: string; features: string[] }> = ({ title, features }) => {
  if (features.length === 0) {
    return (
        <div>
            <h4 className="text-lg font-semibold mb-3 text-slate-800">{title}</h4>
            <p className="text-sm text-slate-500">No specific features listed for this category.</p>
        </div>
    );
  }
  return (
    <div>
        <h4 className="text-lg font-semibold mb-3 text-slate-800">{title}</h4>
        <ul className="space-y-2 text-slate-700">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm">
                    <CheckCircleIcon />
                    <span className="ml-2.5">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
  );
};


const ComparePage: React.FC = () => {
    const { id1, id2 } = useParams<{ id1: string; id2?: string }>();
    const navigate = useNavigate();

    const tool1 = pdfTools.find(p => p.id === Number(id1));
    const tool2 = pdfTools.find(p => p.id === Number(id2));
    const otherTools = pdfTools.filter(p => p.id !== Number(id1));
    const comparisonKey = [id1, id2].sort().join('-');
    const aiComparisonText = (id1 && id2) ? aiComparisons[comparisonKey] || aiComparisons[[id2,id1].join('-')] : undefined;


    if (!tool1) {
        return <div className="text-center py-20">
            <h1 className="text-4xl font-bold">Tool not found</h1>
            <p className="mt-4 text-slate-600">The initial tool for comparison does not exist.</p>
            <Link to="/" className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700">Back to Home</Link>
        </div>
    }

    const handleSelectTool = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        if (selectedId) {
            navigate(`/compare/${id1}/vs/${selectedId}`);
        }
    };

    if (tool1 && tool2) {
        const getFeatures = (tool: PdfTool) => {
            const freePlan = tool.pricingPlans.find(p => p.price === '$0' || p.name.toLowerCase().includes('free'));
            const paidPlans = tool.pricingPlans.filter(p => p.price !== '$0' && !p.name.toLowerCase().includes('free'));
            const freeFeatures = freePlan ? freePlan.features : [];
            const paidFeatures = paidPlans.flatMap(p => p.features);
            const uniquePaidFeatures = [...new Set(paidFeatures)];
            return { freeFeatures, paidFeatures: uniquePaidFeatures };
        };
        const features1 = getFeatures(tool1);
        const features2 = getFeatures(tool2);

        return (
            <div className="space-y-12">
                 {aiComparisonText && (
                    <section className="bg-indigo-50 border-2 border-indigo-200 p-6 sm:p-8 rounded-xl shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <AiInsightIcon />
                            <h2 className="ml-3 text-2xl font-bold text-slate-800 text-center">AI-Powered Comparison</h2>
                        </div>
                        <div 
                            className="text-slate-700 prose max-w-none" 
                            dangerouslySetInnerHTML={{ __html: aiComparisonText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }}
                        >
                        </div>
                    </section>
                )}
                
                <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 space-y-10">
                    {/* --- ROW: NAME & PREVIEW --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{tool1.name}</h2>
                            <a href={tool1.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">Visit Website</a>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{tool2.name}</h2>
                            <a href={tool2.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">Visit Website</a>
                        </div>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link to={`/tool/${tool1.id}`} className="relative block group rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-150 hover:z-10">
                          <img src={tool1.imageUrl} alt={tool1.name} className="w-full h-auto object-cover rounded-lg shadow-md border border-slate-200 group-hover:ring-2 group-hover:ring-indigo-500 transition-all duration-300 ease-in-out" />
                        </Link>
                        <Link to={`/tool/${tool2.id}`} className="relative block group rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-150 hover:z-10">
                          <img src={tool2.imageUrl} alt={tool2.name} className="w-full h-auto object-cover rounded-lg shadow-md border border-slate-200 group-hover:ring-2 group-hover:ring-indigo-500 transition-all duration-300 ease-in-out" />
                        </Link>
                    </div>

                    {/* --- ROW: METRICS --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t pt-8">
                        <div className="flex justify-around items-center gap-4 p-4 bg-slate-50 rounded-lg">
                            <div className="text-center"><div className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Visitors/mo</div><div className="text-2xl font-bold text-slate-800 mt-1">{(tool1.visitors / 1000000).toFixed(1)}M</div></div>
                            <div className="border-l border-slate-300 h-10"></div>
                            <div className="text-center"><div className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Rating</div><div className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2 mt-1"><StarIcon className="w-6 h-6 text-amber-400" /><span>{tool1.rating.toFixed(1)}</span></div></div>
                        </div>
                        <div className="flex justify-around items-center gap-4 p-4 bg-slate-50 rounded-lg">
                            <div className="text-center"><div className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Visitors/mo</div><div className="text-2xl font-bold text-slate-800 mt-1">{(tool2.visitors / 1000000).toFixed(1)}M</div></div>
                            <div className="border-l border-slate-300 h-10"></div>
                            <div className="text-center"><div className="text-sm text-slate-500 uppercase font-semibold tracking-wider">Rating</div><div className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2 mt-1"><StarIcon className="w-6 h-6 text-amber-400" /><span>{tool2.rating.toFixed(1)}</span></div></div>
                        </div>
                    </div>

                    {/* --- ROW: FEATURES --- */}
                    <div className="border-t pt-8">
                        <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Feature Comparison</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="space-y-6"><FeatureList title="Free Features" features={features1.freeFeatures} /><FeatureList title="Paid Features" features={features1.paidFeatures} /></div>
                            <div className="space-y-6"><FeatureList title="Free Features" features={features2.freeFeatures} /><FeatureList title="Paid Features" features={features2.paidFeatures} /></div>
                        </div>
                    </div>

                    {/* --- ROW: PRICING --- */}
                    <div className="border-t pt-8">
                        <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">Plans & Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">{tool1.pricingPlans.map((plan, index) => <PricingCard key={index} plan={plan} />)}</div>
                            <div className="space-y-4">{tool2.pricingPlans.map((plan, index) => <PricingCard key={index} plan={plan} />)}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold">Compare <span className="text-indigo-600">{tool1.name}</span></h1>
                <p className="mt-4 text-lg text-slate-600">Select another website to see a side-by-side comparison of features and pricing.</p>
                <div className="mt-6">
                    <select onChange={handleSelectTool} defaultValue="" className="block w-full max-w-xs mx-auto p-3 border border-slate-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                        <option value="" disabled>Choose a website...</option>
                        {otherTools.map(tool => (
                            <option key={tool.id} value={tool.id}>{tool.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ComparePage;