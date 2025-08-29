import React from 'react';
import { PdfTool } from '../types';
import RankingListItem from './RankingListItem';

interface RankingSectionProps {
  title: string;
  tools: PdfTool[];
  icon: React.ReactNode;
  className?: string;
  rankColor?: string;
}

const RankingSection: React.FC<RankingSectionProps> = ({ title, tools, icon, className, rankColor }) => {
  return (
    <section className={`p-6 rounded-xl ${className || ''}`}>
      <div className="flex items-center mb-6">
        <div className="text-indigo-600 mr-3">{icon}</div>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {tools.map((tool, index) => (
          <RankingListItem key={tool.id} tool={tool} rank={index + 1} rankColor={rankColor} />
        ))}
      </div>
    </section>
  );
};

export default RankingSection;