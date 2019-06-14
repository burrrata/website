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
//import Highlight from './components/highlight.js';

// Why do we need these when using old React classes?
//const fetch = require('node-fetch');
//const regeneratorRuntime =  require("regenerator-runtime");


// highlevel highlights data
const highlevelHighlightsData = [
	// highlevel highlight 1
	{
	title: 'Highlight 1',
	description: 'Filler text is text that is random or otherwise generated.',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
	},
	// highlevel highlight 2
	{
		title: 'Highlight 2',
		description: 'Filler text is text that shares some characteristics of a real written text.',
		image: 'https://apod.nasa.gov/apod/image/1903/F_JellyFish_FIN_APOD1024.jpg',
	},
	// highlevel highlight 3
	{
		title: 'Highlight 3',
		description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
		image: 'https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg',
	},
];
	
// highlights data	
const highlightsData = [
	// Entropy
	{
		title: 'Entropy',
		link: 'https://www.burrrata.ch/entropy',
		description: 'A simple secure passphrase generator.',
		image: 'https://camo.githubusercontent.com/80ed774dd004f7901a4819cbdea6150211d01725/68747470733a2f2f696d67732e786b63642e636f6d2f636f6d6963732f70617373776f72645f737472656e6774682e706e67',
	},
	// Rusty Cryptoeconomics
	{
		title: 'Rusty Cryptoeconomics',
		link: 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html',
		description: 'How to roll a blockchain from scratch with Rust.',
		image: 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg',
	},
	// Tic Tac Toe
	{
		title: 'Tic Tac Toe',
		link: 'https://www.burrrata.ch/tic-tac-toe/',
		description: 'An interactive Tic Tac Toe game used to initialize a Game of Life.',
		image: 'https://raw.githubusercontent.com/burrrata/tic-tac-toe/master/tic-tac-toe.png',
	},
	// Molochasaurus
	{
		title: 'Molochasaurus',
		link: 'https://www.burrrata.ch/molochasaurus',
		description: 'Everything related to the MolochDAO.',
		image: 'https://github.com/burrrata/molochasaurus/blob/master/website/static/img/moloch-background.jpg?raw=true',
	},
];

/*
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
*/

const HighlevelHighlights = (props) => (
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
		{highlevelHighlightsData && highlevelHighlightsData.length && (
			<div style={{
				//border: '1vmin solid blue',
				minWidth: '33vmin',
				maxWidth: '50vmin',
				padding: '3vmin',
				flex: 'auto',
				}}>
				{highlevelHighlightsData.map(({title, description, image}, idx) => (
					<div key={`landing-page-highlight-${idx}`}>
						<div>
							<img style={{
								padding: '1vmin',
								width: '21vmin',
								height: '21vmin',
								borderRadius: '50%',
								}}
								src={image} />
						</div>
						<div>
							<h2 style={{
								padding: '1vmin',
							}}>
								{title}
							</h2>
							<p style={{
								padding: '1vmin',
							}}>
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		)};
	</div>
);

// WORKS, but only if you specify the data WITHIN the component. DOes not work if you pass the data object in as a param
// Testing Dynamic Highlights Component
// a generic component that takes in data to display
const Highlights = (props) => (
	<div style={{
		padding: '5vmin',
	}}>
		{highlightsData && highlightsData.length && (
		<div style={{
        //background: 'black',  
			  //border: '2px solid red',
				margin: '0 auto',
				display: 'flex',
				flexFlow: 'row nowrap',
				flex: 'auto',
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: '2vmin',
				textAlign: 'center',
				alignItems: 'center',
				fontSize: '3vmin',
				wordWrap: 'break-word',
        minHeight: '50vmin',
        minWidth: '80vmin',
				}}>
				{highlightsData.map(({image, title, link, description}, idx) => (
					<div key={`landing-page-highlight-${idx}`}>
						<div style={{
								//background: 'blue',
								//color: '#fff',
								flex: '0 0 50%',
								}}>
							<a href={link}>
								<h2>
									{title}
								</h2>
							</a>
							<p>
								{description}
							</p>
						</div>
						<div style={{
								//background: 'green',
								//color: '#fff',
								flex: '0 0 50%',
								}}>
							<a href={link}>
								<img style={{
											width: '33vmin',
											height: '33vmin',
											borderRadius: '50%',
										}}
										alt={title}
										src={image} />
							</a>
						</div>
					</div>
				))}
		</div>
		)};
	</div>
);

/*
// a component that holds stateful data and passes those to highlight components
function HighlightsSection() {
	// return the components in a container with a little padding
	return (
		<div style={{
				padding: '5vmin',
			}}>
			<LatestAPOD />
			<Highlight {...entropy} />
			<Highlight {...rustyCryptoeconomics} />
			<Highlight {...ticTacToe} />
			<Highlight {...molochasaurus} />
		</div>
	);
}
*/


/*
// stateful component that gets the URL for the latest APOD image and displays it in an img
// - w React class
class LatestAPOD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: null,
    };
  }
  componentDidMount() {
    this.getLatestAPOD()
  }
  async getLatestAPOD() {
    //const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=ExE5PaDrbnGZ8yZfAXdWF4cd4vw9sB8QcKMNVrUg';
		const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
		let response = await fetch(APOD_API);
		let data = await response.json();
	  let url = await data.url;
    this.setState({
      apod: url
    })
  }
  render () {
		const latestAPOD = {
			title: 'Here\'s today\'s APOD:',
			link: 'https://apod.nasa.gov',
			description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.',
			image: `${this.state.apod}`,
		};
    return (
        <Highlight {...latestAPOD} />
    );
  }
}
*/
// stateful component that gets the URL for the latest APOD image and displays it in an img
// - w hooks
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
		return url
	}
  // useEffect to get the APOD API data
  useEffect(() => {
    getLatestAPOD()
      .then(res => setAPOD(res))
	})
	// latest APOD data
	const latestAPOD = {
		title: 'Here\'s today\'s APOD:',
		link: 'https://apod.nasa.gov',
		description: 'Such APOD. Very new. Many wow.',
		image: `${APOD}`,
	};
	// return the component
	return (
		<Highlight {...latestAPOD} />
	);
}



/*
// Placeholder
const PROJECTS = null;
// Showcase Component
const Showcase = () => {
	// Don't display the showcase if there are no items
	if ((PROJECTS.project || []).length === 0) {
		return null;
	}
	// Process the items
	const showcase = PROJECTS.project
		.filter(project => project.pinned)
		.map(project => (
			<a href={project.infoLink} key={project.infoLink}>
				<img src={project.image} alt={project.caption} title={project.caption} />
			</a>
		));
	// Return the showcase items
	return (
		<div>
			<h2>
				More Projects
			</h2>
			<p>
				Here's more things I've built or contributed to
			</p>
			<div>
				{showcase}
			</div>
			<div>
				<a 
					className="button" 
					href=''
				>
					More Projects 
				</a>
			</div>
		</div>
	);
};
*/


// Homepage Component
function Home() {
	// return the components
  return (
    <Layout>
			<HomeSplash />
			<HighlevelHighlights />
			<Highlights />
    </Layout>
  );
}

// export the component
export default Home;
