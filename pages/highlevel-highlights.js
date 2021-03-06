import React from 'react';


// highlevel highlights data
const highlevelHighlightsData = [
	// Aligning Incentives
	{
	title: 'Aligning Incentives',
	description: 'Creating positive-sum community engagement and governance models via cryptoeconomic tokens',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
	},
	// Bringing Apps to Life (ML)
	/*
	{
		title: 'Bringing Apps To Life',
		description: 'Leverage the power of the browser to deliver fast and secure machine learning experiences',
		image: 'https://apod.nasa.gov/apod/image/1903/F_JellyFish_FIN_APOD1024.jpg',
	},
	*/
	{
		title: 'Bringing Ideas To Life',
		description: 'Improving the adoption of cutting edge technologies by improving the developer experience of learning about and using those technologies',
		image: 'https://apod.nasa.gov/apod/image/1903/F_JellyFish_FIN_APOD1024.jpg',
	},
	// Keeping It Simple
	{
		title: 'Keeping It Simple',
		description: 'Focusing on what matters to create the changes we want to see in the world',
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
