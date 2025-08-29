import React from 'react';
import { Link } from 'react-router-dom';
import { PdfTool } from '../types';
import StarIcon from './icons/StarIcon';

interface RankingListItemProps {
  tool: PdfTool;
  rank: number;
  rankColor?: string;
}

const RankingListItem: React.FC<RankingListItemProps> = ({ tool, rank, rankColor }) => {
  const barHighlightColor = rankColor || 'bg-indigo-600';
  const barColor = rank <= 3 ? barHighlightColor : 'bg-slate-500';

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-150 hover:z-10">
      <div className="relative">
        <Link to={`/tool/${tool.id}`} className="block">
            <img src={tool.imageUrl} alt={tool.name} className="w-full h-32 md:h-40 object-cover rounded-t-lg" />
        </Link>
        
        <div className={`absolute top-0 left-0 w-full flex items-center justify-between px-3 py-2 text-white ${barColor}`}>
          <span className="font-extrabold text-xl truncate flex-1 pr-2">#{rank} - {tool.name}</span>
          <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold py-1 px-3 rounded-full bg-black/20 hover:bg-black/40 transition-colors flex-shrink-0"
          >
              Visit
          </a>
        </div>
        
        {tool.tags && tool.tags.length > 0 && (
          <div className="absolute bottom-2 right-2 flex items-center gap-1.5 pointer-events-none">
            {tool.tags.slice(0, 2).map((tag) => (
              <span key={tag.name} className={`px-2 py-1 text-xs font-semibold rounded-full shadow-md ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm text-slate-500 mt-1 h-10 line-clamp-2">{tool.description}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm">
            <div className="flex items-center" title="Rating">
                <StarIcon className="w-3 h-3 text-amber-400" />
                <span className="ml-1 text-slate-600 font-medium">{tool.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center" title="Monthly Visitors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                <span className="ml-1 text-slate-600">{(tool.visitors / 1000000).toFixed(1)}M</span>
            </div>
            <div className="flex items-center" title="Price">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span className="ml-1 text-slate-600 font-medium">{tool.priceDisplay}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RankingListItem;