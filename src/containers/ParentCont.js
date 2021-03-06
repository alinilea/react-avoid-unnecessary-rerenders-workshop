import React from 'react';

// Components
import InputComp from '../components/InputComp';
import ChildClassComp from '../components/ChildClassComp';
import ChildFunctionComp from '../components/ChildFunctionComp';

// Others
import {
  BOOL_FALSE,
  NUMBER,
  STRING,
  STYLE,
  REACT_ELEMENT_SPAN,
  addTwoNumbers,
  OBJECT_WITH_PROPERTIES,
  ARRAY_WITH_ELEMENTS,
  EMPTY_FN,
} from '../constants';

class ParentCont extends React.Component {
  constructor() {
    super();

    this.state = {
      field1: '',
      field2: '',
      field3: '',
    }
  }

  handleChange = (name, value) => this.setState({[name]: value});

  onClickEventHandler = () => console.log(`onClickEventHandler - 
    this way you avoid creating a new function object every time within render`);

  render () {
    const { field1, field2, field3 } = this.state;
    // const OBJECT_WITH_PROPERTIES = {
    //   name: 'I am the property "name" of the OBJECT_WITH_PROPERTIES',
    //   color: '#0f0'
    // };
    // const OBJECT_WITH_PROPERTIES = {};
    return (
      <fieldset>
        <legend>
          I am <strong>ParentCont</strong>, a class/stateful/container/smart component
        </legend>

        <InputComp
          label='field1'
          name='field1'
          value={field1}
          onChange={this.handleChange}
        />
        <InputComp
          label='field2'
          name='field2'
          value={field2}
          onChange={this.handleChange}
        />
        <InputComp
          label='field3'
          name='field3'
          value={field3}
          onChange={this.handleChange}
        />

        <ChildClassComp
          bool={false}
          number={12}
          string={'I am a string'}
          objectWithProperties={OBJECT_WITH_PROPERTIES || {}}
          style={STYLE}
          reactElementSpan={REACT_ELEMENT_SPAN}
          onClickEventHandler={this.onClickEventHandler}
          addTwoNumbers={addTwoNumbers}
          arrayWithValues={ARRAY_WITH_ELEMENTS || []}
        />

        <ChildFunctionComp />

        <style jsx>{`
          div {
            border: 1px dashed #222;
            padding: 15px;
            margin: 15px;
          }
        `}</style>
        <style jsx global>{`
          fieldset {
            border: 1px dashed #222;
            padding: 15px;
            margin-top: 25px;
            margin-bottom: 25px;
          }
          legend {
            padding-left: 15px;
            padding-right:15px;
          }
          p {
            margin-top: 0;
            margin-bottom: 10px;
          }
          ul {
            padding-left: 25px;
            margin-top: 0;
            margin-bottom: 0;
          }
        `}</style>
      </fieldset>
    )
  }
}
export default ParentCont;
