// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from '../styles.module.css';


// This component is meant to be a template that you copy/paste and modify, not export and use directly


// Image that resizes realtive to viewport
function Image(props) {
	return(
		<div
			style={{
				float: 'right', 
			}}
		>
			<a href={props.projectLink}>
				<div 
					style = {{
						display: 'grid',
						height: '100%',
					}}
				>
					<img
						src = {props.projectImage}
						style = {{
							maxWidth: '25vw',
							maxHeight: '25vw',
							margin: 'auto',
						}}
					/>
				</div>
			</a>
		</div>
	)
}

// Text area with title and body
function Text(props) {
	return (
		<div 
			style={{
				textAlign: 'center',
			}}
		>
			<a href={props.projectLink}>
				<h2>
					{props.projectTextHeader}
				</h2>
			</a>
			<br />
			<p>
				{props.projectTextBody}
			</p>
		</div>
	);
}

// App component that does a unique thing
function App() {
	// YOUR APP GOES HERE
}

// Generic App Section Component
function ProjectSection(props) {
	return (
		<div 
			className='container'
			style={{
				padding: '2em',
				margin: '2em',
				minHeight: '50vh',
			}}
		>
			<Text 
				projectLink={props.projectLink}
				projectTextHeader={props.projectTextHeader}
				projectTextBody={props.projectTextBody}
			/>
			<App />
			<Image 
				projectLink={props.projectLink}
				projectImage={props.projectImage} 
			/>
		</div>
	);
}


// This component is meant to be a template that you copy/paste and modify, not export and use directly
