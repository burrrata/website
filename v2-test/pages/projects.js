import React from 'react';


// projects data
const projectsData = [
	// project 1
	{
		title: 'Project 1',
		description: 'Filler text is text that is random or otherwise generated.',
		image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
		link: '',
		pinned: true,
	},
	// project 2
	{
		title: 'Project 2',
		description: 'Filler text is text that shares some characteristics of a real written text.',
		image: 'https://apod.nasa.gov/apod/image/1903/F_JellyFish_FIN_APOD1024.jpg',
		link: '',
		pinned: true,
	},
	// project 3
	{
		title: 'Project 3',
		description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated.',
		image: 'https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg',
		link: '',
		pinned: true,
	},
];


// Automagically turns the highlevelHighlightsData into components
const ProjectHighlights = (props) => (
	<div>
		{proejectsData && projectsData.length && (
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
				{projectsData.map(({title, description, image, link, pinned}, idx) => (
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
export default ProjectHighlights 
