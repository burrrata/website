// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from '../../styles.module.css';



// Highlights Objects
const highlights = [
  {
    title: 'Fullstack Developer',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: 'Experience with React, Rust, Python, Tensorflow, and more...',
  },
  {
    title: 'Focus on your docs',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description:
      "Docusaurus lets you focus on your docs, and we'll do the chores. Now go ahead and dump all your docs into the docs directory.",
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description:
      "Extend or customize your project's layout by reusing React. Docusaurus can be extended while reusing the same header and footer.",
  },
];

// Main Section Component
function Highlights() {
	return (
		<div>
			{highlights && highlights.length && (
				<section className={styles.highlights}>
					<div className="container">
						<div className="row">
							{highlights.map(({imageUrl, title, description}, idx) => (
								<div
									key={`landing-page-highlight-${idx}`}
									className={classnames('col col--4', styles.highlight)}>
									<img src={withBaseUrl(imageUrl)} alt={title} />
									<h3>{title}</h3>
									<p>{description}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			)}
		</div>
	);
}



export default Highlights;
