import React, { Fragment } from 'react';

import Navbar from '../src/components/Navbar';
import HardCodedInputsWithTwoChildsCont
  from '../src/containers/HardCodedInputsWithTwoChildsCont';

class HomePage extends React.Component {
  render () {
    return (
      <Fragment>
        <Navbar page={this.props.url.pathname} />

        <HardCodedInputsWithTwoChildsCont />
      </Fragment>
    )
  }
}

export default HomePage;
