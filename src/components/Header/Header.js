import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex space-x-5 justify-center'>
                <CustomLink className='hover:bg-red-200 border-red-400 py-2 px-4' to='/'>Home</CustomLink>
                <CustomLink className='hover:bg-red-200 border-red-400 py-2 px-4' to='/reviews'>Reviews</CustomLink>
                <CustomLink className='hover:bg-red-200 border-red-400 py-2 px-4' to='/dashboard'>Dashboard</CustomLink>
                <CustomLink className='hover:bg-red-200 border-red-400 py-2 px-4' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='hover:bg-red-200 border-red-400 py-2 px-4' to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;