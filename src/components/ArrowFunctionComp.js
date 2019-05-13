import React from 'react';

const ArrowFunctionComp = () => (
  <fieldset>
    <legend>
      <strong>Child: </strong> I am <strong>ArrowFunctionComp</strong>
      , a function/stateless/presentational/dumb component
    </legend>

    <ul>
      <li>I re-render myself whenever my parent component re-renders</li>
      <li>I am good at rendering UI elements</li>
      <li>I don't support state, refs, lifecycle methods</li>
      <li>I don't extend Component, nor PureComponent</li>
    </ul>
  </fieldset>
);

export default ArrowFunctionComp;
