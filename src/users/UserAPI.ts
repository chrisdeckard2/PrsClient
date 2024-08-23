import { BASE_URL, delay, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { User } from "./User";

let url = `${BASE_URL}/users`;

// interface UserCardProps {
//   user: User;
//   onRemove: (user: User) => void;
// }

export const userAPI = {
  list(): Promise<User[]> {
    return fetch(`${url}`).then(delay(600)).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<User> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(user: User) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(user: User) {
    return fetch(`${url}/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
    // .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },

  findByAccount(username: string, password: string): Promise<User> {
    return (
      fetch(`${url}?username=${username}&password=${password}`)
        .then(checkStatus)
        .then(parseJSON)
        //delete the next three lineswhen using PRS API because it will only return one user not an array with one user
    )
}


};


