import React, {useState, useEffect} from "react";

const FetchComponent = () => {
const [loading, setLoading] = useState(true);
const [users, setUsers] = useState(null);
const [error, setError] = useState(null);

useEffect( () => {
const fetchRecords = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) {
            throw new Error('Network site error occured');
        }
        const result = await response.json();
        setUsers(result);
    }
    catch (error){
setError(error.message);
    }
    finally {
        setLoading(false);
    }

   
    
}
fetchRecords();
}, []);
if(loading) {
    return <div>Data is loading</div>
}
if(error) {
    return <div>Error : {error}</div>
}
return (

    <div>
        <ul>
            {
              users.map(user => (
                <li id={user.id}>{user.name}</li>
              ))  
            }
           
        </ul>
    </div>
)
}
export default FetchComponent