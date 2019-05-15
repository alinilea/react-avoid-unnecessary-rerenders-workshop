import React from 'react';

class ChildClassComp extends React.Component {
  render () {
    const {
      style, bool, number, string, objectWithProperties, reactElementSpan,
      addTwoNumbers, onClickEventHandler, arrayWithValues,
    } = this.props;

    return (
      <fieldset>
        <legend>
          I am <strong>ChildClassComp</strong>, a functional/stateless/presentational/dumb component
        </legend>

        <ul style={style}>
          <li>bool: { bool ? 'true' : 'false'}</li>

          <li>number: { number }</li>

          <li>string: { string }</li>

          <li style={{ color: objectWithProperties.color || '#000' }}>
            object: { objectWithProperties.name || 'OBJECT_WITH_PROPERTIES is an empty object'}
          </li>

          <li>reactElementSpan: { reactElementSpan }</li>

          <li>addTwoNumbers function: { addTwoNumbers() || 'addTwoNumbers() placeholder' }</li>

          <li><button onClick={onClickEventHandler}>onClickEventHandler</button></li>

          <li style={{ color: arrayWithValues[1] || '#000' }}>
            array: { arrayWithValues[0] || 'ARRAY_WITH_VALUES is an empty array'}
          </li>
        </ul>
      </fieldset>
    )
  }
}

export default ChildClassComp;
