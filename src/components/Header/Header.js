import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex space-x-5 justify-center mb-5 mt-3'>
                <CustomLink className='font-medium hover:border-b-[2px] border-indigo-700 py-2 px-4' to='/'>Home</CustomLink>
                <CustomLink className='font-medium hover:border-b-[2px] border-indigo-700 py-2 px-4' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='font-medium hover:border-b-[2px] border-indigo-700 py-2 px-4' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='font-medium hover:border-b-[2px] border-indigo-700 py-2 px-4' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='font-medium hover:border-b-[2px] border-indigo-700 py-2 px-4' to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;