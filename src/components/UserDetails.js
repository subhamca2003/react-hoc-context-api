import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUser();
    }, [id]);

    if (!user) {
        return <p>Loading user details...</p>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <Link to="/">Back to User List</Link>
        </div>
    );
};

export default UserDetails;
