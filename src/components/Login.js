import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext'; // Ensure the correct import path

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginUserHandler = async () => {
    const data = {
      email: email,
      password: password,
    };

    const config = {
      method: 'post',
      url: 'http://127.0.0.1:3000/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios.request(config);
      const token = response.data.accessToken;
      const userData = { name: 'Subhendu Das', email: email }; // Adjust according to response structure
      // Store the access token and user information in context
      loginUser(token, userData);
      this.$router.push('/my-profile'); // Redirect to the profile page
    } catch (error) {
      setError('Login failed! Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: '50%' }}>
        <div className="card-body">
          <h1 className="text-center">Login</h1>
          <form onSubmit={(e) => { e.preventDefault(); loginUserHandler(); }}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" required />
            </div>
            {error && <div className="text-danger">{error}</div>}
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;