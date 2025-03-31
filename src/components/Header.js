import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Import AuthContext

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext); // Access user context

    return (
        <header>
            <h1>My Application</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <p>Email: {user.email}</p>
                    <button onClick={logoutUser}>Logout</button>
                </div>
            ) : (
                <p>Please log in.</p>
            )}
        </header>
    );
};

export default Header;