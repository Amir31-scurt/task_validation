import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

function PostDetail() {
    const { id } = useParams();
    const { posts } = useContext(PostContext);
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = posts.find(p => p.id === parseInt(id));
        setPost(foundPost);
    }, [id, posts]);

    if (!post) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; Back to Posts</Link>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <p className="text-gray-600 mb-6">{post.body}</p>
            <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M user"></path>
                </svg>
                User {post.userId}
            </div>
        </div>
    );
}

export default PostDetail;