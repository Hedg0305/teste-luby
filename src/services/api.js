import axios from 'axios';

export const api = axios.create({
  baseURL: ('https://api.github.com/users/'),
});

export async function getUser(user) {
  const { data } = await api.get(`${user}`);
  return data;
}

export async function getRepos(user) {
  const { data } = await api.get(`${user}/repos`);
  return data;
}

export async function getFollowers(user) {
  const { data } = await api.get(`${user}/followers`);
  return data;
}

export async function getFollowing(user) {
  const { data } = await api.get(`${user}/following`);
  return data;
}
