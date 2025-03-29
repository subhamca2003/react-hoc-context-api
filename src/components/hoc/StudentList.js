import React from 'react';
import withLoading from './withLoading';

const UserList = ({ data }) => {
  return (
    <div>
        <b>A Higher-Order Component (HOC) in React is an advanced technique used 
            to enhance components by wrapping them in another component. 
            Essentially, a HOC is a function that takes a component and 
            returns a new component, enabling you to reuse functionality and share
             behavior across different components.
             </b>
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li> // Display user names
      ))}
    </ul>
    </div>
  );
};

// Wrap UserList with the HOC and provide the API URL
export default withLoading(UserList, 'https://jsonplaceholder.typicode.com/users');