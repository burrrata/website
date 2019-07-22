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
			className={classnames('hero', styles.header)}
			style={{
				background: 'transparent',
				paddingTop: '10vmin',
			}}
		>
			<div className="container">
				<img 
					src={withBaseUrl('img/burrrata.png')} 
					alt="logo" 
				/>
				<div>
					<h1 className="hero__title">
						{siteConfig.title}
					</h1>
					<p className="hero__subtitle">
						{siteConfig.tagline}
					</p>
				</div>
				<div 
					className={styles.buttons}
				>
					<Link
						className={classnames(
							'button button--outline button--primary button--lg',
							styles.getStarted,
						)}
						style={{
							background: 'white',
							border: 'solid 0.5vmin',
						}}
						to={withBaseUrl('docs/about')}>
						Let's build the future
					</Link>
				</div>
			</div>
		</header>
	);
}

export default HomeSplash;
