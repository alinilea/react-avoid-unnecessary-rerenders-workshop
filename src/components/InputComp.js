import React from 'react';

class InputComp extends React.Component {
  handleChange = (e) => {
    const { onChange, name} = this.props;

    onChange(name, e.target.value);
  };

  render () {
    const { label, name, value } = this.props;

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
