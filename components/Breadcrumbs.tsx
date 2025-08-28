
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { pdfTools } from '../data/tools';

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);


const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const params = useParams<{ id?: string; id1?: string; id2?: string }>();

    const pathnames = location.pathname.split('/').filter(x => x);

    // Don't render on the home page
    if (pathnames.length === 0) {
        return null;
    }

    const crumbs = [{ name: 'Home', path: '/' }];

    if (pathnames[0] === 'tool' && params.id) {
        const tool = pdfTools.find(p => p.id === Number(params.id));
        if (tool) {
            crumbs.push({ name: tool.name, path: `/tool/${params.id}` });
        }
    } else if (pathnames[0] === 'compare' && params.id1) {
        crumbs.push({ name: 'Compare', path: `/compare/${params.id1}` });
        const tool1 = pdfTools.find(p => p.id === Number(params.id1));
        if (tool1 && params.id2) {
             const tool2 = pdfTools.find(p => p.id === Number(params.id2));
             if (tool2) {
                crumbs.push({ name: `${tool1.name} vs ${tool2.name}`, path: location.pathname });
             }
        } else if (tool1) {
            crumbs.push({ name: tool1.name, path: `/compare/${params.id1}` });
        }
    }
    
    return (
        <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    return (
                        <li key={crumb.name} className="inline-flex items-center">
                            {isLast ? (
                                <span className="text-sm font-medium text-slate-500">{crumb.name}</span>
                            ) : (
                                <>
                                    <Link to={crumb.path} className="text-sm font-medium text-slate-700 hover:text-indigo-600">
                                        {crumb.name}
                                    </Link>
                                    <ChevronRightIcon />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;