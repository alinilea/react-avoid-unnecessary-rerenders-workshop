import React, { Fragment } from 'react';
import Head from 'next/head';

// Components
import Navbar from '../src/components/Navbar';
import ParentWithManyFieldsCont from '../src/containers/ParentWithManyFieldsCont';

class PerformanceIssuePage extends React.Component {
  render () {
    return (
      <Fragment>
        <Head>
          <title>Workshop-Avoid unnecessary re-renders</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon.ico" />
        </Head>

        <Navbar page={this.props.url.pathname} />

        <ParentWithManyFieldsCont />

        <Navbar page={this.props.url.pathname} />
      </Fragment>
    )
  }
}

export default PerformanceIssuePage;
