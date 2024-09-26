// components/ListePosts.js
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

function ListePosts() {
    const { posts, getComments } = useContext(PostContext);
    const [postsWithComments, setPostsWithComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const updatedPosts = await Promise.all(
                posts.map(async (post) => {
                    const comments = await getComments(post.id);
                    return { ...post, comments };
                })
            );
            setPostsWithComments(updatedPosts);
        };
        fetchComments();
    }, [posts, getComments]);

    return (
        <div className="space-y-6">
            {postsWithComments.map(post => (
                <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.body}</p>
                        <div className="flex justify-between items-center mb-4">
                            <Link to={`/modifier/${post.id}`} className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">Modifier</Link>
                            <span className="text-gray-500 dark:text-gray-400">{post.comments.length} commentaires</span>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                            {post.comments.length > 3 && (
                                <Link to={`/post/${post.id}`} className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300">
                                    Voir les commentaires
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListePosts;