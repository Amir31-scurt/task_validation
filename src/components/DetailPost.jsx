// components/DetailPost.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

function DetailPost() {
    const { id } = useParams();
    const { getPost, getComments } = useContext(PostContext);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPostAndComments = async () => {
            const fetchedPost = await getPost(id);
            setPost(fetchedPost);
            const fetchedComments = await getComments(id);
            setComments(fetchedComments);
        };
        fetchPostAndComments();
    }, [id, getPost, getComments]);

    if (!post) {
        return <div className="text-center mt-8 text-gray-600 dark:text-gray-300">Chargement...</div>;
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <Link to="/" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 mb-4 inline-block">&larr; Retour aux posts</Link>
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{post.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{post.body}</p>
            <Link to={`/modifier/${post.id}`} className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 mb-6 inline-block">Modifier ce post</Link>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Commentaires</h2>
                {comments.map(comment => (
                    <div key={comment.id} className="mb-4 p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{comment.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">{comment.body}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Par: {comment.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DetailPost;