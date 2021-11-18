import { api } from '../api';

export const getAllPosts = async () => {
  const posts = (await api.get('/posts')).data;

  if (!posts) return null;
  return posts;
};
