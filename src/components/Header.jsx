import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">BlogPosts</Link>
                <nav>
                    <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;