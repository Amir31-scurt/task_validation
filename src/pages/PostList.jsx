import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';
function PostList() {
    const { posts } = useContext(PostContext);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.body.substring(0, 100)}...</p>
                        <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M user"></path>
                            </svg>
                            User {post.userId}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default PostList;