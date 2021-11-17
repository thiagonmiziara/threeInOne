import styled from 'styled-components';

interface TableProps {
  isCompleted?: boolean;
}

export const Container = styled.div`
  header {
    padding: 2rem;
    border-radius: 0.25rem;

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.125rem;
      span {
        color: var(--blue);
      }
      svg {
        font-size: 3.125rem;
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  th {
    color: var(--text-title);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
`;

export const Td = styled.td<TableProps>`
  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.25rem;
  background: var(--background);
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
  &:first-child {
    color: ${({ isCompleted }) => (isCompleted ? '#90caf9' : 'var(--text)')};
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  margin-left: 0.5rem;
  transition: hover 0.2s ease-in-out;

  svg {
    font-size: 1.25rem;
  }

  &:hover {
    svg {
      color: var(--blue);
    }
  }
`;
