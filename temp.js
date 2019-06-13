
import React from 'react';

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

// export the component
export default Highlight






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
		description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sam      ple of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself       may be nonsense, or largely Latin, as in Lorem ipsum.',
		image: `${APOD}`,
	};

	// return the component
	return (
		<HighlevelHighlight {...latestAPOD} />
	);
}


// render the highlights section
ReactDOM.render(
<LatestAPOD />,
document.getElementById('root')
);
