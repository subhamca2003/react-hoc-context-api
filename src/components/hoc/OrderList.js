import React from "react";
import withLoading from "./withLoading";

const OrderList = ({data}) => {
   return (
    <ul>
        {
            data.map(user => (
                <li id={user.id}>{user.name}-{user.email}</li>
            ))
        }
    
    </ul>
   )
}
export default withLoading(OrderList, 'https://jsonplaceholder.typicode.com/users');