import React from 'react';

const HeroSectionHome = () => {
    return (
        <div className='container text-left'>
            <div className="grid my-8 lg:my-0 lg:grid-cols-2 grid-cols-1 items-center lg:gap-5">
                <div>
                    <h1 className='font-bold text-[56px] leading-tight capitalize'>Love the power <br /> <span className='text-indigo-700'> Love the price</span></h1>
                    <p className='text-xl my-5 text-zinc-600'>Thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. An advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.</p>
                </div>
                <div className='flex justify-center'>
                    <img src="images/macbook.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSectionHome;