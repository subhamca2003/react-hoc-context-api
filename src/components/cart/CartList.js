import React, { useState, useContext } from 'react';
import DataList from '../DataList';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext

const CartList = (props) => {
     // Access the theme value from the ThemeContext
     const { theme } = useContext(ThemeContext);
    const apiUrl = 'https://fakestoreapi.com/users';
    const [state, setState] = useState({ 'name': 'subhendu das' });
    const changeName = () => {
        setState({ 'name': 'P K KUMAR' });
    };
    return (
        <div style={{ 
            background: theme === 'light' ? '#fff' : '#333', 
            color: theme === 'light' ? '#000' : '#fff', 
            padding: '20px', 
            borderRadius: '5px' ,
            textAlign: 'center'
          }}>
            <h1>This is a User listing page</h1>
            <div>{state.name}</div>
            <input type="button" name="Click here" value="Click here" onClick={changeName} />
            <DataList
            apiUrl={apiUrl}
            renderItem={{
                header: ['ID', 'User name', 'Email', 'Password'],
                renderRow: (user) => (
                    <>
                        <td>{user.id}</td>
                        <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </>
                )
            }}
        />
        </div>
    );
};
export default CartList;