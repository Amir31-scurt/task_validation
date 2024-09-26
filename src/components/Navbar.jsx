// components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
import { IoIosHome } from 'react-icons/io';
import { GiFeather } from 'react-icons/gi';

function Navbar() {
    const { theme, toggleTheme } = useContext(PostContext);

    return (
        <nav className="bg-teal-600 dark:bg-teal-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <ul className="flex justify-between items-center">
                    <li><Link to="/" className="text-2xl font-bold">BlogPosts</Link></li>
                    <li><Link to="/" className="hover:text-teal-200 transition-colors"><IoIosHome className='text-3xl' /></Link></li>
                    <li><Link to="/ajouter" className="hover:text-teal-200 transition-colors flex gap-3 items-center">Ajouter un post{" "}<GiFeather className='text-2xl' /></Link></li>
                    <li className='hidden'>
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-teal-700 dark:bg-teal-600">
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;