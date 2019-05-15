import React, { Fragment } from 'react';
import Head from 'next/head';

import Navbar from '../src/components/Navbar';
import HardCodedInputsWithTwoChildsCont
  from '../src/containers/HardCodedInputsWithTwoChildsCont';

class HomePage extends React.Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>Workshop-Avoid unnecessary re-renders</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico" />
        </Head>

        <Navbar page={this.props.url.pathname} />

        <HardCodedInputsWithTwoChildsCont />
      </Fragment>
    )
  }
}

export default HomePage;
