import React from 'react';

const ChildFunctionComp = () => (
  <fieldset>
    <legend>
      I am <strong>ChildFunctionComp</strong>, a function/stateless/presentational/dumb component
    </legend>

    <ul>
      <li>I re-render myself whenever my parent component re-renders and nothing can stop me!</li>
      <li>I am good at rendering UI elements</li>
      <li>I don't support state, refs, lifecycle methods</li>
      <li>I don't extend Component, nor PureComponent</li>
    </ul>
  </fieldset>
);

export default ChildFunctionComp;
