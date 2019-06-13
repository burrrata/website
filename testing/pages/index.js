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
import Highlight from './components/highlight.js';

// Why do we need these?
const fetch = require('node-fetch');
const regeneratorRuntime =  require("regenerator-runtime");



// highlevel highlight 1
const highlight1 = {
	title: 'Highlight 1',
	description: 'Filler text is text that is random or otherwise generated.',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
};

// highlevel highlight 2
const highlight2 = {
	title: 'Highlight 2',
	description: 'Filler text is text that shares some characteristics of a real written text.',
	image: 'https://apod.nasa.gov/apod/image/1903/F_JellyFish_FIN_APOD1024.jpg',
};

// highlevel highlight 3
const highlight3 = {
	title: 'Highlight 3',
	description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
	image: 'https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg',
};



// Generic APOD Data 
const genericAPOD = {
	title: 'Here\'s an APOD:',
	link: 'https://apod.nasa.gov',
	description: 'APOD helps you discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
};

// Entropy
const entropy = {
	title: 'Entropy',
	link: 'https://www.burrrata.ch/entropy',
	description: 'A simple secure passphrase generator.',
	image: 'https://camo.githubusercontent.com/80ed774dd004f7901a4819cbdea6150211d01725/68747470733a2f2f696d67732e786b63642e636f6d2f636f6d6963732f70617373776f72645f737472656e6774682e706e67',
}

// Rusty Cryptoeconomics
const rustyCryptoeconomics = {
	title: 'Rusty Cryptoeconomics',
	link: 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html',
	description: 'How to roll a blockchain from scratch with Rust.',
	image: 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg',
}

// Tic Tac Toe
const ticTacToe = {
	title: 'Tic Tac Toe',
	link: 'https://www.burrrata.ch/tic-tac-toe/',
	description: 'An interactive Tic Tac Toe game used to initialize a Game of Life.',
	image: 'https://raw.githubusercontent.com/burrrata/tic-tac-toe/master/tic-tac-toe.png',
}

// Molochasaurus
const molochasaurus = {
	title: 'Molochasaurus',
	link: 'https://www.burrrata.ch/molochasaurus',
	description: 'Everything related to the MolochDAO.',
	image: 'https://github.com/burrrata/molochasaurus/blob/master/website/static/img/moloch-background.jpg?raw=true',
}



// a generic component that takes in parameters to display
const HighlevelHighlight = (props) => (
		<div style={{
      //border: '1vmin solid blue',
			minWidth: '33vmin',
			maxWidth: '50vmin',
      padding: '3vmin',
      flex: 'auto',
      }}>
      <img style={{
        padding: '1vmin',
        width: '21vmin',
        height: '21vmin',
        borderRadius: '50%',
        }}
        src={props.image} />
      <h2 style={{
        padding: '1vmin',
      }}>
        {props.title}
      </h2>
      <p style={{
        padding: '1vmin',
      }}>
        {props.description}
      </p>
		</div>
);

// gets the URL for the latest APOD image and displays it in an img
function LatestAPOD() {
	// init state
	const [APOD, setAPOD] = useState(null);

	// async function to get the latest APOD URL from the APOD API
  async function getLatestAPOD() {
    const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=ExE5PaDrbnGZ8yZfAXdWF4cd4vw9sB8QcKMNVrUg';
		//const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
		const response = await fetch(APOD_API);
		const data = await response.json();
	  const url = await data.url;
    setAPOD(url)
  }
 
	// latest APOD data
	const latestAPOD = {
		title: 'Here\'s today\'s APOD:',
		link: 'https://apod.nasa.gov',
		description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.',
		image: `${APOD}`,
	};

	// return the component
	return (
		<HighlevelHighlight {...latestAPOD} />
	);
}


// a component that holds stateful data and passes those to HighlevelHighlight components
function HighlevelHighlights() {
	// return the components in a container with a little padding
	return (
		<div style={{
			//background: 'black',  
			//border: '1vmin solid red',
			margin: '0 auto',
			padding: '5vmin',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'space-between',
			justifyContent: 'center',
			flexWrap: 'wrap',
			textAlign: 'center',
			fontSize: '3vmin',
			wordWrap: 'break-word',
			minHeight: '50vmin',
			minWidth: '80vmin',
			}}>
				<HighlevelHighlight {...highlight1} />
				<HighlevelHighlight {...highlight2} />
				<HighlevelHighlight {...highlight3} />
		</div>
	);
}


// a component that holds stateful data and passes those to highlight components
function HighlightsSection() {
	
	// return the components in a container with a little padding
	return (
		<div style={{
				padding: '5vmin',
			}}>
			<Highlight {...genericAPOD} />
			<LatestAPOD />
			<Highlight {...entropy} />
			<Highlight {...rustyCryptoeconomics} />
			<Highlight {...ticTacToe} />
			<Highlight {...molochasaurus} />
		</div>
	);
}


// Homepage Component
function Home() {
	// return the components
  return (
    <Layout>
			<HomeSplash />
			<HighlevelHighlights />
			<HighlightsSection />
    </Layout>
  );
}

// export the component
export default Home;
