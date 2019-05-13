import React, { Fragment } from 'react';

// Components
import Navbar from '../src/components/Navbar';
import RenderInputsUsingMapCont from '../src/containers/RenderInputsUsingMapCont';

class PerformanceIssuePage extends React.Component {
  render () {
    return (
      <Fragment>
        <Navbar page={this.props.url.pathname} />

        <RenderInputsUsingMapCont />

        <Navbar page={this.props.url.pathname} />
      </Fragment>
    )
  }
}

export default PerformanceIssuePage;
