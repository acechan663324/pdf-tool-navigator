
import React from 'react';
import { Link } from 'react-router-dom';
import { PdfTool } from '../types';
import StarIcon from './icons/StarIcon';

interface ToolCardProps {
  tool: PdfTool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Link 
      to={`/tool/${tool.id}`} 
      className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={tool.imageUrl} alt={tool.name} />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
          {tool.priceDisplay}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">{tool.name}</h3>
        <p className="text-slate-600 mt-2 text-sm h-10">{tool.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-amber-400" />
            <span className="ml-1 text-slate-700 font-semibold">{tool.rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-slate-500">{tool.visitors.toLocaleString()} visitors/mo</span>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
