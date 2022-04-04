import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewSecHome = (props) => {
    const { showReviews } = props;

    const [reviews, setReviews] = useReviews();
    const slicedReview = reviews.slice(0, 3);
    console.log(slicedReview);
    return (
        <div className='lg:py-10'>
            <div className="container">
                <h2 className='font-bold text-4xl mb-5'>Customer Reviews (3)</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 py-10'>
                    {
                        slicedReview.map(review =>
                            <ReviewCard key={review.id} review={review} ></ReviewCard>
                        )
                    }
                </div>
                <button onClick={showReviews} className="inline-flex items-center hover:bg-indigo-400 py-2 px-8 rounded-lg bg-indigo-500 text-white">Show all Reviews<ArrowRightIcon className='h-5 w-5 ml-2'></ArrowRightIcon></button>
            </div>
        </div>
    );
};

export default ReviewSecHome;