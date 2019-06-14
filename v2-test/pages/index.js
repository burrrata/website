// Docusaurus Default Imports
import React, {Component, useState, useEffect} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

// My Custom Components
import HomeSplash from './homesplash.js';
import HighlevelHighlights from './highlevel-highlights.js';
import MainHighlights from './main-highlights.js';

// Homepage Component
function Home() {
	// return the components
  return (
    <Layout>
			<HomeSplash />
			<HighlevelHighlights />
			<MainHighlights />
    </Layout>
  );
}

// export the component
export default Home;
