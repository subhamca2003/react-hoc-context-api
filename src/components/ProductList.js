import React from 'react';
import DataList from './DataList';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const apiUrl = 'https://fakestoreapi.com/products';

    return (
        <DataList
            apiUrl={apiUrl}
            renderItem={{
                header: ['ID', 'Title', 'Price', 'Description', 'Category', 'image'],
                renderRow: (product) => (
                    <>
                        <td>{product.id}</td>
                        <td><Link to={`/user/${product.id}`}>{product.title}</Link></td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} alt={product.image} width="100"/></td>
                    </>
                )
            }}
        />
    );
};

export default ProductList;