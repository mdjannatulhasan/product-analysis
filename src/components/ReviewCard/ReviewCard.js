import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const ReviewCard = (props) => {
    const { id, stars, username, name, image, review } = props.review;

    let star = [];

    for (let i = 1; i <= stars; i++) {
        star.push(<StarIcon key={id.toString()+i+'a'} className='w-6 h-6 text-yellow-500'></StarIcon>);
    }
    for (let i = 1; i <= 5 - parseInt(stars); i++) {
        star.push(<StarIcon key={id.toString()+i} className='w-6 h-6 text-slate-300'></StarIcon>);
    }
    return (
        <div className='drop-shadow rounded-lg text-left bg-white py-5 px-8'>
            <div className='pt-3 pb-4'>
                <div className='flex'>
                    {star}
                </div>
                <p className='py-3'>"{review}"</p>
            </div>
            <div className="flex items-center space-x-4">
                <div className='rounded-full h-16 w-16 overflow-hidden'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-medium'>{name}</h3>
                    <p className='text-slate-500'>@{username}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;