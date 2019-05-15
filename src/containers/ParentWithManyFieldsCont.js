import React from 'react';

// Components
import InputComp from '../components/InputComp';
import ChildClassComp from '../components/ChildClassComp';
import ChildFunctionComp from '../components/ChildFunctionComp';

// Others
import {
  totalFieldsNumber,
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

const setInitialFormData = () => {
  const initialFormData = {};

  for (let i=1; i <= totalFieldsNumber; i++) {
    initialFormData[`field${i}`] = ''
  }

  return initialFormData;
};

class ParentWithManyFieldsCont extends React.Component {
  constructor () {
    super();

    this.state = { formData: setInitialFormData() };
  }

  handleChange = (name, value) => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      }
    }));
  };

  onClickEventHandler = () => console.log('onClickEventHandler button was clicked');

  render () {
    const { formData } = this.state;

    return (
      <fieldset>
        <legend>
          I am <strong>ParentWithManyFieldsCont</strong>, a class/stateful/container/smart component
        </legend>

        {
          Object.keys(formData).map((inp, index) => {
            return (
              <InputComp
                key={index}
                label={inp}
                name={inp}
                value={formData[inp]}
                onChange={this.handleChange}
              />
            )
          })
        }

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

export default ParentWithManyFieldsCont;
