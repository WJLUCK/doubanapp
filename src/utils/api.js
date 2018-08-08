import request from "./request";
import axios from "axios";

export function getList(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}
