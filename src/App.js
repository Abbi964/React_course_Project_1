import {React, useState} from 'react'
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/Users/UserList';

function App() {

  // making a state for users
  const [users, setUsers] = useState([
    {username : 'Raman', age : 23, id : 'user1'},
    {username : 'Raghav', age : 37, id : 'user2'}
  ])

  function addUserHandler(user){
    setUsers((prevUsers)=>{
      let newUser = {username : user.username, age : user.age, id : Math.random()};
      let newUsers = [newUser,...prevUsers]
      return newUsers
    })
  }
  
  let contents = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  )

  if (users.length > 0){
    contents = (
      <UserList items={users}/>
    )
  }


  return (
    <div>
      <section id="user-form">
        <UserForm onAddUser={addUserHandler}/>
      </section>
      <section id="users">
        {contents}
      </section>
    </div>
  );
}

export default App;
