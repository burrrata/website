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
import TicTacToeApp from './tic-tac-toe.js';
import {ProjectHighlights} from './projects.js';

// Homepage Component
function Home() {
	// return the components
  return (
		<div
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/1200px-Burrata2.jpg)',
			}}
		>
			<div
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.5)',	
				}}
			>
				<Layout>
					<HomeSplash />
					<ProjectHighlights />
				</Layout>
			</div>
		</div>
  );
}

// export the component
export default Home;
