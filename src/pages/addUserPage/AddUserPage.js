import React, {useState} from 'react';
import {addUserAction} from "../../redux/actions";
// import {usersReducer} from "../../redux/reducers/usersReducer";
import {useDispatch} from "react-redux";



function AddUserPage(props) {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: "",
    email: ""
  })

  const changeInput = (event) => {
    setForm({
      ...form,
      [event.target.value]: event.target.value
    })
  }

  const registerUser = () => {
    dispatch(addUserAction(form))
  }


  return (
      <>
        <h1>Register User</h1>
        <input
            type="text"
            placeholder="name"
            name="name"
            onChange={changeInput}
        />
        <input
            type="text"
            placeholder="email"
            name="email"
            onChange={changeInput}
        />
        <button onClick={registerUser}>register</button>
      </>
  );
}

export default AddUserPage;