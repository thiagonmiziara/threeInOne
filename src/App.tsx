import { TodoList } from './components/TodoList';

import { Container, GlobalStyle } from './styles/GlobalStyle';

export function App() {
  return (
    <Container>
      <TodoList />
      <GlobalStyle />
    </Container>
  );
}
