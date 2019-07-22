// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from '../styles.module.css';

// My Custom Components
import ProjectSection from '../components/project-section.js';

// Rusty Cryptoeconomics Component
function RustyCryptoeconomics() {
	return (
		<ProjectSection 
			projectImage = 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg'
			projectTextHeader = 'Rusty Cryptoeconomics'
			projectTextBody = 'How to roll a blockchain from scratch with Rust.'
			projectLink = 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html'
		/>
	);
}




/*
const propsData = {
	projectImage: 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg',
	projectLink: 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html',
	projectTextHeader: 'Rusty Cryptoeconomics',
	projectTextBody: 'How to roll a blockchain from scratch with Rust.',
};
*/

/*
// Rusty Cryuptoeconomics Component
function RustyCryptoeconomics() {

	// useful stuff
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

	// project component stuff
	const projectImage = 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg';
	const projectLink = 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html';
	const projectTextHeader = 'Rusty Cryptoeconomics';
	const projectTextBody = 'How to roll a blockchain from scratch with Rust.';

	// return the components
  return (
		<div 
			className='container'
			style={{
				padding: '2em',
				margin: '2em',
				minHeight: '50vh',
			}}
		>
			<div 
				style={{
					float: 'left',
					textAlign: 'left',
				}}
			>
				<a href={projectLink}>
					<h2>
						{projectTextHeader}
					</h2>
				</a>
				<br />
				<p>
					{projectTextBody}
				</p>
			</div>
			<div
				style={{
					float: 'right',
				}}
			>
				<a href={projectLink}>
					<img 
						src={projectImage}
					/>
				</a>
			</div>
		</div>
  );
}
*/



export default RustyCryptoeconomics;
