

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { pdfTools } from '../data/tools';
import StarIcon from '../components/icons/StarIcon';
import { Review } from '../types';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const AiInsightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);


const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = pdfTools.find(p => p.id === Number(id));

  const [reviews, setReviews] = React.useState<Review[]>(tool?.reviews || []);
  const [newReview, setNewReview] = React.useState({ author: '', rating: 0, comment: '' });
  const [hoverRating, setHoverRating] = React.useState(0);
  const [formError, setFormError] = React.useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setReviews(tool?.reviews || []);
  }, [id, tool]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rate: number) => {
    setNewReview(prev => ({ ...prev, rating: rate }));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author.trim() || !newReview.comment.trim() || newReview.rating === 0) {
      setFormError('Please fill in all fields and provide a rating.');
      return;
    }

    const reviewToAdd: Review = {
      id: Date.now(),
      author: newReview.author,
      avatarUrl: `https://i.pravatar.cc/48?u=${Date.now()}`,
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      comment: newReview.comment,
    };

    setReviews(prev => [reviewToAdd, ...prev]);
    setNewReview({ author: '', rating: 0, comment: '' });
    setHoverRating(0);
    setFormError('');
  };


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

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length)
    : tool.rating;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      {/* 1. Website Preview Image */}
      <div className="relative overflow-hidden">
        <img src={tool.imageUrl} alt={tool.name} className="w-full h-96 object-cover object-top transition-transform duration-300 ease-in-out hover:scale-125" />
        {tool.tags && tool.tags.length > 0 && (
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            {tool.tags.map((tag) => (
              <span key={tag.name} className={`px-3 py-1.5 text-sm font-semibold rounded-full shadow-lg ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
      
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
            <StarIcon key={i} className={`w-7 h-7 ${i < Math.round(averageRating) ? 'text-amber-400' : 'text-gray-300'}`} />
          ))}
          <span className="ml-3 text-2xl font-bold text-slate-700">{averageRating.toFixed(1)}</span>
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
        
        {/* 8. User Reviews */}
        <div className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">User Reviews</h2>
            <div className="max-w-3xl mx-auto">
                {/* Review Submission Form */}
                <form onSubmit={handleSubmitReview} className="bg-slate-50 p-6 rounded-lg mb-8 border border-slate-200">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">Write a Review</h3>
                    <div className="space-y-4">
                        <input
                            type="text"
                            name="author"
                            value={newReview.author}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                         <div className="flex items-center">
                            <span className="text-slate-700 mr-4">Your Rating:</span>
                            <div className="flex">
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <button
                                            type="button"
                                            key={ratingValue}
                                            onClick={() => handleRatingChange(ratingValue)}
                                            onMouseEnter={() => setHoverRating(ratingValue)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            className="focus:outline-none"
                                        >
                                            <StarIcon className={`w-6 h-6 cursor-pointer ${ratingValue <= (hoverRating || newReview.rating) ? 'text-amber-400' : 'text-gray-300'}`} />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <textarea
                            name="comment"
                            value={newReview.comment}
                            onChange={handleInputChange}
                            placeholder="Share your experience..."
                            rows={4}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    {formError && <p className="text-red-500 text-sm mt-2">{formError}</p>}
                    <button type="submit" className="mt-4 w-full bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors">
                        Submit Review
                    </button>
                </form>

                {/* Reviews List */}
                <div className="space-y-6">
                    {reviews.map(review => (
                        <div key={review.id} className="p-5 border border-slate-200 rounded-lg flex items-start space-x-4">
                            <img src={review.avatarUrl} alt={review.author} className="w-12 h-12 rounded-full flex-shrink-0" />
                            <div className="flex-grow">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-bold text-slate-800">{review.author}</h4>
                                    <span className="text-xs text-slate-500">{review.date}</span>
                                </div>
                                <div className="flex items-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="mt-2 text-slate-600">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                    {reviews.length === 0 && (
                        <p className="text-center text-slate-500 py-8">Be the first to leave a review!</p>
                    )}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DetailPage;