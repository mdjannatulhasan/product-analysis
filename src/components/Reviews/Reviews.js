import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    return (
        <div className='lg:py-10'>
            <div className="container">
                <h2 className='font-bold text-4xl mb-5 capitalize'>What customer says</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 py-10'>
                    {
                        reviews.map(review =>
                            <ReviewCard key={review.id} review={review} ></ReviewCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;