import { api } from '../api';

export const getTasks = async () => {
  const tasks = await (await api.get('todos')).data;

  if (!tasks) return null;
  return tasks;
};

export const updateTask = async (
  taskId: number | undefined,
  editedTask: Object
) => {
  const task = (
    await api.put(`/todos/${taskId}`, {
      params: editedTask,
    })
  ).data;
  if (!task) return null;
  return task;
};

export const deleteTask = async (taskId: number) => {
  await api.delete(`/todos/${taskId}`);
};

export const addTask = async (newTask: object) => {
  const task = (
    await api.post('/users', {
      params: newTask,
    })
  ).data;

  return task;
};
