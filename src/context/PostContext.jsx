// PostContext.js
import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        fetchPosts();
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const fetchPosts = async () => {
        const response = await fetch(`${API_BASE_URL}/posts`);
        const data = await response.json();
        setPosts(data);
    };

    const getPost = async (id) => {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`);
        return await response.json();
    };

    const getComments = async (postId) => {
        const response = await fetch(`${API_BASE_URL}/comments?postId=${postId}`);
        return await response.json();
    };

    const addPost = async (post) => {
        const response = await fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const newPost = await response.json();
        setPosts([...posts, newPost]);
        return newPost;
    };

    const updatePost = async (id, updatedPost) => {
        const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const updated = await response.json();
        setPosts(posts.map(post => post.id === id ? updated : post));
        return updated;
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <PostContext.Provider value={{ posts, getPost, getComments, addPost, updatePost, theme, toggleTheme }}>
            {children}
        </PostContext.Provider>
    );
};