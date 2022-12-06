import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneUserAction} from "../../redux/actions";
import {useParams} from "react-router-dom";

function UserInfo(props) {
  const {id} = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.usersReducer.user)

  useEffect(() => {
    dispatch(getOneUserAction(id))
  }, [])

  return (
      <>
        <h1>More information about {user.name}</h1>
        <ul>
          <li><b>Username:</b> {user.username}</li>
          <li><b>Email:</b> {user.email}</li>
          <li><b>_street:</b> {user.address.street}</li>
          <li><b>_suit:</b> {user.address.suite}</li>
          <li><b>_city:</b> {user.address.city}</li>
          <li><b>Phone:</b> {user.phone}</li>
          <li><b>Website:</b> {user.website}</li>
          <li><b>Company's name:</b> {user.company.name}</li>
          <li><b>catch phrase:</b> {user.company.catchPhrase}</li>
          <li><b>bs: </b>{user.company.bs}</li>
        </ul>
      </>
  )
}

export default UserInfo;