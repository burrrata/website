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

// Molochasaurus Component
function Molochasaurus() {
	return (
		<ProjectSection 
			projectImage = 'https://github.com/burrrata/molochasaurus/blob/master/website/static/img/moloch-background.jpg?raw=true'
			projectTextHeader = 'Molochasaurus'
			projectTextBody = 'Everything related to the MolochDAO.'
			projectLink = 'https://www.burrrata.ch/molochasaurus'
		/>
	);
}

export default Molochasaurus;
