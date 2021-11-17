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
  const [isComplete, setIsComplete] = useState<boolean>();

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

  const handleUpdateTask = async () => {};

  const handleCheckedTask = (id: number) => {
    const checkedTask = tasks?.findIndex((task) => task.id === id);
    const { completed } = tasks[checkedTask];

    if (checkedTask >= 0) {
      tasks[checkedTask].completed = !completed;
      setTasks((oldValue) => [...oldValue]);
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

      <div>
        <input type="text" />
        <button>Salvar</button>
      </div>

      <S.Table>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <S.Td isCompleted={task.completed}>{task.title}</S.Td>
                <S.Td>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        readOnly
                        checked={task.completed}
                        onChange={() => handleCheckedTask(task.id)}
                      />
                    </label>
                    <S.Button>
                      <AiOutlineEdit />
                    </S.Button>
                    <S.Button onClick={() => handleDeleteTask(task.id)}>
                      <AiTwotoneDelete />
                    </S.Button>
                  </div>
                </S.Td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
