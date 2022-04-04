import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewSecHome = (props) => {
    const { showReviews } = props;

    const [reviews, setReviews] = useReviews();
    const slicedReview = reviews.slice(3);

    return (
        <div className='lg:py-10'>
            <h2 className='font-bold text-4xl mb-5'>Customer Reviews (3)</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    slicedReview.map(review => {
                        <ReviewCard review={review} ></ReviewCard>
                    })
                }
            </div>
            <button onClick={showReviews} className="inline-flex items-center">Show all Reviews<ArrowRightIcon className='h-5 w-5 ml-2'></ArrowRightIcon></button>
        </div>
    );
};

export default ReviewSecHome;