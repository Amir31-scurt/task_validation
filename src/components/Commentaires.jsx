import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

function Commentaires() {
    const { id } = useParams();
    const { getComments } = useContext(PostContext);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments = await getComments(id);
            setComments(fetchedComments);
        };
        fetchComments();
    }, [id, getComments]);

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <Link to={`/post/${id}`} className="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; Retour au post</Link>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Commentaires</h1>
            {comments.map(comment => (
                <div key={comment.id} className="mb-4 p-4 border-b">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{comment.name}</h2>
                    <p className="text-gray-600 mb-2">{comment.body}</p>
                    <p className="text-sm text-gray-500">Par: {comment.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Commentaires;