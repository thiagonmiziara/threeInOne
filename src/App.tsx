import { useEffect, useState } from 'react';
import { TodoList } from './components/TodoList';
import { getTodos } from './services/todo';
import { Container, GlobalStyle } from './styles/GlobalStyle';

export function App() {
  // const [state, setState] = useState<any>();
  // async function todos() {
  //   const todo = await getTodos();
  //   setState(todo);
  // }

  // useEffect(() => {
  //   todos();
  // }, []);

  return (
    <Container>
      <TodoList />
      <GlobalStyle />
    </Container>
  );
}
