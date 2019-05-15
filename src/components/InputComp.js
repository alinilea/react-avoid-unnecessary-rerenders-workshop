import React from 'react';

class InputComp extends React.Component {
  // state = {
  //   value: this.props.value
  // };

  handleChange = (e) => {
    const { onChange, name} = this.props;
    onChange(name, e.target.value);

    // this.setState({ value:  e.target.value })
  };

  render () {
    const { label, name, value } = this.props;
    // const { label, name } = this.props;
    // const { value } = this.state;

    return (
      <div>
        <label>{ label }</label>
        <input
          name={name}
          value={value}
          onChange={this.handleChange}
        />

        <style jsx>{`
          div {
            margin: 15px 0;
          }
          label {
            display: inline-block;
            width: 60px;
            margin-right: 15px;
          }
        `}</style>
      </div>
    )
  }
}

export default InputComp;
