import React, { Fragment } from 'react';
import Head from 'next/head';

// Components
import Navbar from '../src/components/Navbar';
import RenderInputsUsingMapCont from '../src/containers/RenderInputsUsingMapCont';

class PerformanceIssuePage extends React.Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>React avoid unnecessary re-renders - Workshop</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Navbar page={this.props.url.pathname} />

        <RenderInputsUsingMapCont />

        <Navbar page={this.props.url.pathname} />
      </Fragment>
    )
  }
}

export default PerformanceIssuePage;
