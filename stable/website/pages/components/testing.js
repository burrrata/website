// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from '../styles.module.css';


// Hello World Testing Component
function Welcome(props) {
	return (
		<div>
  		<h1>Hello, {props.name}</h1>
		</div>
	);
}

export default Welcome;
