import React, {ChangeEvent} from 'react'
import styled from '@emotion/styled'
import Checkbox from './Checkbox'

const Button = styled("button")`
  font-weight: 400;
  color: white;
  font-size: 0.75em;
  border: 1px solid transparent;
  background-color: transparent;
  margin: 5px;
  cursor: pointer;
`;
const Item = styled("li")`
  font-size: 1.75em;
  padding: 0.25em 0.25em 0.25em 0.5em;
  color: white;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }
`;

interface Todo {
  completed: boolean;
  id: string,
  text: string,
};

export interface TodoItemProps {
  todo: Todo,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = props => (
  <Item key={props.todo.id}>
    <Checkbox 
      id={props.todo.id}
      label={props.todo.text}
      checked={props.todo.completed}
      onChange={props.onChange}
    />
  </Item>
);55
