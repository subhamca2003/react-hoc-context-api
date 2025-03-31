import React from "react";

const UserCard = ({name, email, age}) => {
return (
    <div>
        <h1>User card</h1>
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{email}</div>
        </div>
    </div>
)
}
export default UserCard