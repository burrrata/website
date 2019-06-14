//import React from 'react';
import React, {Component, useState, useEffect} from 'react';

// Why do we need these for stateful components?
//const fetch = require('node-fetch');
//const regeneratorRuntime =  require("regenerator-runtime");


// test data
const testData = {
	title: 'Test Data',
	link: '',
	description: 'Filler text is text that is random or otherwise generated.',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
};

// main highlights data	
const mainHighlightsData = [
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
		<MainHighlight {...latestAPOD} />
	);
}







// a generic component that takes in parameters to display
const MainHighlight = (props) => (
		<div style={{
			  //border: '1vmin solid red',
				margin: '0 auto',
				padding: '5vmin',
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
				<div style={{
						//border: '1vmin solid blue',
            flex: '0 0 50%',
						}}>
					<a href={props.link}>
						<h2>
							{props.title}
						</h2>
					</a>
					<p>
						{props.description}
					</p>
				</div>
				<div style={{
						//border: '1vmin solid green',
						flex: '0 0 50%',
						}}>
				<a href={props.link}>
					<img style={{
								width: '33vmin',
								height: '33vmin',
								borderRadius: '50%',
							}}
							src={props.image} />
					</a>
				</div>
		</div>
);

// a component that holds stateful data and passes those to highlight components
function MainHighlightsContainer() {
	// return the components in a container with a little padding
	return (
		<div>
			<MainHighlight {...testData} />
		</div>
	);
}

/*
// DOES NOT WORK: Uncaught Invariant Violation
const MainHighlights = (props) => {
	<div style={{
			padding: '5vmin',
		}}>
		<LatestAPOD />
		{mainHighlightsData && mainHighlightsData.length && (
			<div>
				{mainHighlightsData.map(item => (
					<MainHighlight {...item} />
				))}
			</div>
		)}
	</div>
}
*/

// REMOVED <LatestAPOD /> because it wasn't working
// - I think I need to import some libraries to make stateful components work
// a generic component that takes in data to display
const MainHighlights = (props) => (
	<div>
		<div>
		{mainHighlightsData && mainHighlightsData.length && (
			<div style={{
				padding: '5vmin',
				}}>
				{mainHighlightsData.map(({image, title, link, description}, idx) => (
					<div style={{
						//border: '1vmin solid red',
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
						}} 
						key={`landing-page-highlight-${idx}`}>
						<div style={{
							//border: '1vmin solid blue',
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
								//border: '1vmin solid green',
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
	</div>
);



export default MainHighlights
