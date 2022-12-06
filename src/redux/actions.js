import {types} from "./types";

function usersInfoAction (data) {
  return {
    type: types.USERS_INFO,
    payload: data
  }
}

function oneUserInfoAction (data) {
  return {
    type: types.ONE_USER_INFO,
    payload: data
  }
}

export function addUserAction (data) {
  return async function () {
    const options = {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch('https://jsonplaceholder.typicode.com/users',options)
        .then(response => {
          if (response.status === 201) {
            alert("user registered")
          }
          else if (response.status === 404) {
            alert("404 not found")
          }
        })
  }
}


export const getUsersAction = () => {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    dispatch(usersInfoAction(data))

  }
}
export const getOneUserAction = (id) => {
  return async function (dispatch) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    dispatch(oneUserInfoAction(data))
  }
}