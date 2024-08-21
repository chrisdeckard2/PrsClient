import { BASE_URL, delay, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Request } from "./Requests";

let url = `${BASE_URL}/requests`;

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}

export const requestAPI = {
  list(): Promise<Request[]> {
    return fetch(`${url}`).then(delay(600)).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<Request> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(request: Request) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(request: Request) {
    return fetch(`${url}/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
    // .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
