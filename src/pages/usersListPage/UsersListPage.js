import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "../../redux/actions";
import {Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function UsersListPage(props) {
  const dispatch = useDispatch()

  const users = useSelector(state => state.usersReducer.users)

  useEffect(()=>{
    dispatch(getUsersAction())
  }, [])

  return (
      <>
        <h1 className="mb-5">Users List</h1>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
            {
              users.map(user =>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <NavLink to={`/${user.id}`}>
                          ...more
                      </NavLink>
                    </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </>
  );
}

export default UsersListPage;