import styled from 'styled-components';

interface TableProps {
  isCompleted?: boolean;
}

interface FormProps {
  isEdit?: boolean;
}

export const Container = styled.div`
  margin-top: 4rem;
  border-radius: 0.5rem;
  background-color: var(--shape);
  box-shadow: 1px 5px 10px 5px var(--text);
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

export const Form = styled.form<FormProps>`
  width: 90%;
  display: ${({ isEdit }) => (isEdit ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  input {
    width: 20rem;
    height: 2rem;
    padding-left: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.25rem;
    color: var(--text);
    background: var(--background);
    border: none;
  }

  button {
    width: 5rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    border: none;
    background: var(--blue);
    color: var(--shapes);

    transition: all 0.2s ease-in;

    &:hover {
      border: 1.5px solid var(--blue);
      background: var(--background);
      color: var(--text-title);
    }
  }
`;

export const Table = styled.table`
  width: 80%;
  margin: 0 auto;
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
  background: ${({ isCompleted }) =>
    isCompleted ? 'var(--text-light)' : 'var(--background)'};

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
