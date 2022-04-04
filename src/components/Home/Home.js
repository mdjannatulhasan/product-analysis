import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSectionHome from '../HeroSectionHome/HeroSectionHome';
import ReviewSecHome from '../ReviewSecHome/ReviewSecHome';

const Home = () => {
    const navigate = useNavigate();
    const showReviews = () => {
        navigate('/reviews');
    }
    return (
        <div>
            <HeroSectionHome></HeroSectionHome>
            <ReviewSecHome showReviews = {showReviews}></ReviewSecHome>
        </div>
    );
};

export default Home;