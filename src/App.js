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
import OrderList from './components/hoc/OrderList';
import ParentComponent from './components/props/ParentCard';
import { AuthProvider } from './components/AuthContext';
import Header from './components/Header'; // Import the Header component
import Login from './components/Login'; // Example login component
import FetchComponent from './components/fetch/FetchList';
import CounterLimit from './components/CountLimit';

const App = () => {
  return (
    <div>
      <HeaderMenu /> {/* Include the HeaderMenu component here */}
      <ThemeProvider>
        <AuthProvider>
          <Header></Header>
      <Routes>
        <Route path="/parent-component" element={<ParentComponent />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart-list" element={<CartList />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fetch-component" element={<FetchComponent />} />
        <Route path="/counter-limit" element={<CounterLimit />} />
      </Routes>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <ThemedComponent />
      </div>
      </AuthProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
