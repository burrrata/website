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
