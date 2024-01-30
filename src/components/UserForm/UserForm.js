import {React, useState} from "react";
import './UserForm.css'
import Button from "../UI/Button";
import Overlay from "../UI/Overlay";

function UserForm(props) {
  // making state for username and age
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')

  // making state for vaidity and error
  const [isValid, setIsValid] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  function usernameChangeHandler(e){
    setUsername(e.target.value)
  }
  function ageChangeHandler(e){
    setAge(e.target.value)
  }

  function submitHandler(e){
    e.preventDefault();
    // checking if input is valid
    if (username.trim('').length === 0 || age.trim('').length === 0 || +age < 0){
      if (+age < 0){
        setErrorMsg('Please Enter a non-negative age')
        setIsValid(false)
      }
      else{
        setErrorMsg('Please Enter non-empty values')
        setIsValid(false)
      }
    }
    else{
      let user = {
        username : username,
        age : age
      }
      props.onAddUser(user)
      // clearing inputs
      setUsername('')
      setAge('')
      setIsValid(true)
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label>Username</label>
        <input type="text" value={username} id="username" onChange={usernameChangeHandler}/>
        <label>Age (Years) </label>
        <input type="text" value={age} id="age" onChange={ageChangeHandler}/>
      </div>
      <Button className='button' type="submit">
        Add User
      </Button>
      <div>
      {!isValid ? <Overlay error={errorMsg} onClickOkay={()=>setIsValid(true)}/> : <div></div>}

      </div>
    </form>
  );
}

export default UserForm;
