import React from "react"
import UserCard from "./UserCard"

const User = {
    name: 'subhendu das',
    age: 17,
    email: 'subhendu@email.com'
}

const ParentComponent = () => {
    return (
        <UserCard name={User.name} age={User.age} email ={User.email} />
    )
}
export default ParentComponent
