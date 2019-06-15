import React from 'react';


// test data
const testData = {
	title: 'Test Data',
	description: 'Filler text is text that is random or otherwise generated.',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
};

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

// a component that holds stateful data and passes those to HighlevelHighlight components
function HighlevelHighlightsContainer() {
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
			<HighlevelHighlight {...testData} />
		</div>
	);
}

// Automagically turns the highlevelHighlightsData into components
const HighlevelHighlights = (props) => (
	<div>
		{highlevelHighlightsData && highlevelHighlightsData.length && (
			<div style={{
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
				{highlevelHighlightsData.map(({title, description, image}, idx) => (
					<div style={{
						//border: '1vmin solid blue',
						minWidth: '33vmin',
						maxWidth: '50vmin',
						padding: '3vmin',
						flex: 'auto',
						}}
						key={`highlevel-highlight-${idx}`}>
						<img style={{
							padding: '1vmin',
							width: '21vmin',
							height: '21vmin',
							borderRadius: '50%',
							}}
							src={image} />
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
				))}
			</div>
		)};
	</div>
);

// export the component
export default HighlevelHighlights
