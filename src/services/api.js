import axios from 'axios';

export const api = axios.create({
  baseURL: ('https://api.github.com/users/'),
});

export async function getUser(user) {
  return api.get(`${user}`);
}

export async function getRepos(user) {
  return api.get(`${user}/repos`);
}
