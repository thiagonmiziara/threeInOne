import React, { useCallback, useEffect, useState } from 'react';
import { FcTodoList } from 'react-icons/fc';
import { AiOutlineEdit, AiTwotoneDelete } from 'react-icons/ai';

import { getTasks, deleteTask, updateTask } from '../../services/todo';

import * as S from './styles';

interface TodoListProps {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export function TodoList() {
  const [tasks, setTasks] = useState<TodoListProps[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskId, setTaskId] = useState<number>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const taskListContent = useCallback(async () => {
    const taskList = await getTasks();
    if (taskList) {
      setTasks(taskList);
    }
  }, []);

  const handleDeleteTask = async (id: number) => {
    setTasks(tasks?.filter((task) => task.id !== id));
    await deleteTask(id);
  };

  const handleUpdateTask = async (event: React.FormEvent) => {
    event?.preventDefault();

    const editingTask = tasks?.find((task) => task.id === taskId);
    if (editingTask) {
      const updatedTask = {
        title: taskTitle,
      };

      editingTask.title = taskTitle;
      setTasks((oldValue) => [...oldValue]);
      setTaskTitle('');
      await updateTask(taskId, updatedTask);
    }
  };

  const handleCheckedTask = (id: number) => {
    const checkedTask = tasks?.find((task) => task.id === id);

    if (checkedTask) {
      checkedTask.completed = !checkedTask.completed;
      setTasks((oldValue) => [...oldValue]);
    }
  };

  const handleChangeTask = (
    event: React.ChangeEvent<HTMLInputElement>,
    id?: number
  ) => {
    event.preventDefault();

    if (id) {
      tasks?.find(
        (task) => task.id === id && setTaskTitle(task.title),
        setTaskId(id)
      );
      setIsEdit((oldValue) => !oldValue);
    } else {
      setTaskTitle(event.target.value);
    }
  };

  useEffect(() => {
    taskListContent();
  }, [taskListContent]);

  return (
    <S.Container>
      <header>
        <h1>
          <FcTodoList />
          To<span>.</span>Do
        </h1>
      </header>

      <S.Form onSubmit={handleUpdateTask} isEdit={isEdit}>
        <input
          type="text"
          value={taskTitle}
          onChange={(event) => {
            handleChangeTask(event);
          }}
        />
        <button
          type="submit"
          onClick={() => setIsEdit((oldValue) => !oldValue)}
        >
          Edit Task
        </button>
      </S.Form>

      <S.Table>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <S.Td>
                  <div>
                    <input
                      type="checkbox"
                      readOnly
                      checked={task.completed}
                      onChange={() => handleCheckedTask(task.id)}
                    />
                  </div>
                </S.Td>
                <S.Td isCompleted={task.completed}>{task.title}</S.Td>
                <S.Td>
                  <S.Button onClick={(e: any) => handleChangeTask(e, task.id)}>
                    <AiOutlineEdit />
                  </S.Button>
                  <S.Button onClick={() => handleDeleteTask(task.id)}>
                    <AiTwotoneDelete />
                  </S.Button>
                </S.Td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
