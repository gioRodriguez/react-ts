import React, { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { type } from 'os';

const Wrapper = styled('div')`
  position: relative;
`;

const Input = styled('input')`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

type LabelProps = {
  completed: boolean;
};

const Label = styled('label')<LabelProps>`
  display: inline-block;
  padding-left: 1.5em;
  text-decoration: ${props => (props.completed ? 'line-through' : 'initial')};
  color: ${props => (props.completed ? '#ccc' : 'white')};

  &:before {
    content: '';
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50% auto;
    border: 2px solid #ccc;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1em;
    height: 1em;
    cursor: pointer;
  }

  input[type='checkbox']:focus + &:before {
    border-color: #70b77e;
  }

  input[type='checkbox']:checked + &:before {
    background-color: #70b77e; // #f2545b;
    opacity: 1;
    background-image: url('data:image/svg+xml,\
      <svg viewBox="0 0 127 132" xmlns="http://www.w3.org/2000/svg">\
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">\
          <polyline id="Line" stroke="white" stroke-width="30" points="7.58190835 74.8644228 49.1900368 123.50333 119.645623 7.6658546"></polyline>\
        </g>\
      </svg>');
  }
`;

export interface CheckboxProps {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.StatelessComponent<CheckboxProps> = props => (
  <Wrapper>
    <Input
      type="checkbox"
      id={props.id}
      name={props.label}
      checked={props.checked}
      onChange={props.onChange}
    />
    <Label htmlFor={props.id} aria-hidden="true" completed={props.checked}>
      {props.label}
    </Label>
  </Wrapper>
);

export default Checkbox;
