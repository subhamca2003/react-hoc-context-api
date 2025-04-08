import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <h1 className="mt-4">Post Listing</h1>
            <table className="table table-bordered table-striped mt-3">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>User Id</th>
                    </tr>
                </thead>
                <tbody style={postListStyles}>
                    {posts.map(post => (
                        <tr key={post.id} style={postItemStyles}>
                            <td>{post.id}</td>
                            <td><Link to={`/user/${post.id}`}>{post.title}</Link></td>
                            <td>{post.body}</td>
                            <td>{post.userId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Styles for the PostList
const postListStyles = {
    maxHeight: '200px', // Set a maximum height for the list
    overflowY: 'auto', // Enable vertical scrolling for long lists
    border: '1px solid #ccc', // Add a border for better visuals
    padding: '10px',
    marginTop: '10px',
  };
  
  // Styles for each post item
  const postItemStyles = {
    padding: '5px',
    borderBottom: '1px solid #eee', // Add a separator between items
  };
export default PostList;
