import React from "react";
import './UserItem.css'

function UserItem(props){

    return (
        <li className="user_item" >
            {props.children}
        </li>
    )

}

export default UserItem;