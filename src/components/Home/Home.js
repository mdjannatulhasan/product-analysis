import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const showReviews = () => {
        navigate('/reviews');
    }
    return (
        <div>
            <h1>Home is a valo place</h1>
            <button onClick={showReviews}>Show all</button>
        </div>
    );
};

export default Home;