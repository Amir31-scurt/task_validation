// components/AjouterPost.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

function AjouterPost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { addPost } = useContext(PostContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPost({ title, body, userId: 31 });
        navigate('/');
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Ajouter un nouveau post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Titre</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="body" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Contenu</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-gray-700"
                        rows="6"
                        required
                    ></textarea>
                </div>
                <div className="flex gap-5">
                    <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Ajouter le post
                    </button>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        <Link to="/" className="text-white dark:text-white hover:text-white dark:hover:text-white inline-block">
                            Annuler

                        </Link>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AjouterPost;