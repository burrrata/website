import React from 'react';

// a generic component that takes in parameters to display
const HighlevelHighlight = (props) => (
		<div style={{
      //border: '1vmin solid blue',
			minWidth: '33vmin',
			maxWidth: '50vmin',
      padding: '1vmin',
      flex: 'auto',
      }}>
      <img style={{
        padding: '1vmin',
        width: '21vmin',
        height: '21vmin',
        borderRadius: '50%',
        }}
        src={props.image} />
      <h3 style={{
        padding: '1vmin',
      }}>
        {props.title}
      </h3>
      <p style={{
        padding: '1vmin',
      }}>
        {props.description}
      </p>
		</div>
);

// a component that holds stateful data and passes those to HighlevelHighlight components
function HighlevelHighlights() {
	
	// highlight 1
	const highlight1 = {
		title: 'Here\'s an APOD:',
		description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
		image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
	};

	// highlight 2
	const highlight2 = {
		title: 'Here\'s today\'s APOD:',
		description: 'Filler text is text that shares some characteristics of a real written text.',
		image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
	};
	
	// highlight 3
	const highlight3 = {
		title: 'Here\'s yet another APOD:',
		description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
		image: 'https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg',
	};

	// return the components in a container with a little padding
	return (
	<div style={{
			//background: 'black',  
			//border: '1vmin solid red',
			margin: '0 auto',
			padding: '3vmin',
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
				<HighlevelHighlight {...highlight2} />          
				<HighlevelHighlight {...highlight2} />
				<HighlevelHighlight {...highlight3} />
				<HighlevelHighlight {...highlight2} />
				<HighlevelHighlight {...highlight1} />
		</div>
	);
}


// export the component
export default HighlevelHighlights
