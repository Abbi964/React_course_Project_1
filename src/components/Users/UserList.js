import React from "react";
import './UserList.css'
import UserItem from "./UserItem";

function UserList(props){
return (
    <ul className="user_list">
        {props.items.map((user)=> (
            <UserItem key = {user.id} id = {user.id}>
                {`${user.username} (${user.age} years old)`}
            </UserItem>
        ))}
    </ul>
    

)

}

export default UserList;