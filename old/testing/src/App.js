//import React from 'react';
import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



// example component
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// format date
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

// stateful component that gets the time
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}



// MY COMPONENTS
////////////////

// a generic component that takes in parameters to display
const Highlight = (props) => (
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
				<div style={{
            //background: 'blue',
            //color: '#fff',
            flex: '0 0 50%',
						}}>
          <div style={{
						//paddingTop: '5vmin',
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
				</div>
				<div style={{
            //background: 'green',
            //color: '#fff',
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

// stateful component that gets the URL for the latest APOD image and displays it in an img
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
		description: 'So new. Much APOD. Many wow.',
		image: `${APOD}`,
	};
	// return the component
	return (
		<Highlight {...latestAPOD} />
	);
}


// MY DATA

// testing APOD data
const testingAPOD = {
  title: 'Here\'s An APOD:',
  link: 'https://apod.nasa.gov',
  description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
  image: 'https://apod.nasa.gov/apod/image/1906/NICERNightMovesnolabels1200.jpg',
};

// testing object with mutliple objects
const myHighlightsData = [
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





// THIS WORKS :)
// Highlights Objects
const defaultHighlightsData = [
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
function DefaultHighlights() {
	return (
		<div>
			{defaultHighlightsData && defaultHighlightsData.length && (
				<section>
					<div>
						<div>
							{defaultHighlightsData.map(({imageUrl, title, description}, idx) => (
								<div key={`landing-page-highlight-${idx}`}>
									<img src={imageUrl} alt={title} />
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


// WORKS, but only if you specify the data WITHIN the component. DOes not work if you pass the data object in as a param
// Testing Dynamic Highlights Component
// a generic component that takes in data to display
const MyHighlights = (props) => (
	<div style={{
		padding: '5vmin',
	}}>
		{myHighlightsData && myHighlightsData.length && (
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
				{myHighlightsData.map(({image, title, link, description}, idx) => (
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


// WHY DOES THIS NOT WORK?
/*
// Testing another architecture for a generic Highlights component
function GenericHighlights(data) {
	// if the input data is empty, do nothing
	if (data.length === 0) {
		return null;
	}
	// iterate through the data
	const showcase = data.map(project => (
		<a 
			href={project.link} 
			key={project.link}
		>
			<img 
				src={project.image} 
				alt={project.title} 
				style={{
					maxHeight: '128px',
					padding: '20px',
					width: '128px',
				}}
			/>
			<h2>
				{project.title}
			</h2>
			<p>
				{project.description}
			</p>
		</a>
	));
	// return the components
	return (
		<div 
			className="mainContainer"
			style={{
				flex: '1 1 auto',
				maxWidth: '100%',
				padding: '40px 0',
			}}
		>
			<div>
				<div 
					className="showcaseSection"
					style={{
					  margin: '0 auto',
						maxWidth: '900px',
						textAlign: 'center',
					}}
				>
					<div 
						className="prose"
						style={{
							margin: '0 auto',
							maxWidth: '900px',
							textAlign: 'center',
						}}
					>
						<h1>Section Title Goes Here</h1>
						<p>Description of the section goes here</p>
					</div>
					<div 
						className="logos"
						style={{
							alignItems: 'center',
							display: 'flex',
							flexFlow: 'row wrap',
							justifyContent: 'center',
						}}
					>
						{showcase}
					</div>
				</div>
			</div>
		</div>
	);
}
*/





function App() {
  return (
    <div className="App">
			<Clock />
			<MyHighlights />
      <Highlight {...testingAPOD} />
			<LatestAPOD />
			<DefaultHighlights />
			<Example />
    </div>
  );
}

export default App;
