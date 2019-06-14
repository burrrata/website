// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';






// Header Component
function HomeSplash() {

	// useful stuff
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

	// return the components
	return (
		<header 
			className={classnames('hero hero--dark', styles.header)}
			style={{
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Burrata2.jpg/1200px-Burrata2.jpg)',
			}}
		>
			<div className="container">
				<img 
					src={withBaseUrl('img/burrrata.png')} 
					alt="logo" 
				/>
				<h1 className="hero__title">
					{siteConfig.title}
				</h1>
				<p className="hero__subtitle">
					{siteConfig.tagline}
				</p>
				<div 
					className={styles.buttons}
				>
					<Link
						className={classnames(
							'button button--outline button--primary button--lg buttonPadding',
							styles.getStarted,
						)}
						style={{
							background: 'white',
							border: 'solid 0.5vmin',
						}}
						to={withBaseUrl('docs/doc1')}>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default HomeSplash;
