import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import PostList from './components/posts/PostList';
import StudentList from './components/hoc/StudentList';
import ProductList from './components/ProductList';
import CartList from './components/cart/CartList';
import UserDetails from './components/UserDetails';
import HeaderMenu from './components/HeaderMenu';
import { ThemeProvider } from './components/ThemeContext'; // Import the ThemeProvider
import ThemedComponent from './components/ThemedComponent'; // Import the component that uses the context

const App = () => {
  return (
    <div>
      <HeaderMenu /> {/* Include the HeaderMenu component here */}
      <ThemeProvider>
      <Routes>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart-list" element={<CartList />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <ThemedComponent />
      </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
