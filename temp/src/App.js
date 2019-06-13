//import React from 'react';
import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';



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


// testing APOD data
const testingAPOD = {
  title: 'Here\'s An APOD:',
  link: 'https://apod.nasa.gov',
  description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
  image: 'https://apod.nasa.gov/apod/image/1906/NICERNightMovesnolabels1200.jpg',
};


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









function App() {
  return (
    <div className="App">
			<Clock />
      <Highlight {...testingAPOD} />
			<LatestAPOD />
			<Example />
    </div>
  );
}

export default App;
