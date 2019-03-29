import React, { Fragment, useState } from 'react';

interface State {
  text?: string;
  checked?: boolean;
}

const HelloHooks = () => {
  const [state, setState] = useState<State>({
    text: '',
    checked: false
  });

  const mergeState = (partialState: State) =>
    setState(prevState => ({
      ...prevState,
      ...partialState
    }));

  return (
    <Fragment>
      <div>Hello Hooks</div>
      <input
        type="text"
        value={state.text}
        onChange={e => mergeState({ text: e.target.value })}
      />
      <input
        type="checkbox"
        checked={state.checked}
        onChange={e => mergeState({ checked: !state.checked })}
      />
      <ul>
        <li>{state.text}</li>
        <li>{state.checked!.toString()}</li>
      </ul>
    </Fragment>
  );
};

export default HelloHooks;
