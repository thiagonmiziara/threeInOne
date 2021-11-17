import { api } from '../api';

export const getTodos = async () => {
  const todos = await (await api.get('todos')).data;

  if (!todos) return null;
  return todos;
};
