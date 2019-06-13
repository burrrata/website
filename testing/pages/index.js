/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

// My Custom Components
import HomeSplash from './homesplash.js';
import Highlights from './highlights.js';
import RustyCryptoeconomics from './projects/rusty-cryptoeconomics.js';
import Molochasaurus from './projects/molochasaurus.js';
import TicTacToe from './projects/tic-tac-toe.js';


// Homepage Component
function Home() {

	// useful stuff
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

	const testData = {
		name: 'TESTING-BADGERS',
	};

	// return the components
  return (
    <Layout>
			<HomeSplash />
			<main>
				<Highlights />
				<TicTacToe />
				<RustyCryptoeconomics />
				<Molochasaurus />
			</main>
    </Layout>
  );
}

export default Home;
