import React from 'react';


// projects data
const projectsData = [
	// 1Hive 
	{
		title: '1Hive',
		image: 'https://avatars3.githubusercontent.com/u/29875830?s=200&v=4',
		link: 'https://1hive.org/',
		pinned: true,
	},
	// Aragon Cooperative
	{
		title: 'Aragon Cooperative',
		image: 'https://avatars1.githubusercontent.com/u/46876207?s=200&v=4',
		link: 'https://mainnet.aragon.org/#/0x940B2B518F761f4c52CDd9865C57D9a907DC5E82/',
		pinned: true,
	},
	// Meta
	{
		title: 'meta',
		image: 'https://waitbutwhy.com/wp-content/uploads/2018/04/How-do-you-work-4.png',
		link: 'https://github.com/burrrata/meta',
		pinned: true,
	},
	// APOD Archive Scraper
	{
		title: 'APOD Archive Scraper',
		image: 'https://apod.nasa.gov/apod/image/1906/Mice_LRGB_web.jpg',
		link: 'https://github.com/burrrata/apod-archive-scraper',
		pinned: true,
	},
	// Ethereum Magicians: integrity ring
	{
		title: 'Ethereum Magicians: integrity ring',
		image: 'https://ethereumevents.global/assets/fellowship-logomark.png',
		link: 'https://github.com/ethereum-magicians/integrity-ring',
		pinned: true,
	},
	// Research
	{
		title: 'research',
		image: 'https://assets4.bigthink.com/system/tinymce_assets/3261/original/thinker.jpg?1471139663',
		link: 'https://github.com/burrrata/research',
		pinned: true,
	},
	// placeholder project 1
	{
	title: 'Placeholder Project 1',
	image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
	link: 'https://apod.nasa.gov/',
	pinned: true,
	},
	// placeholder project 2
	{
		title: 'Placeholder Project 2',
		image: 'https://apod.nasa.gov/apod/image/1903/F_JellyFish_FIN_APOD1024.jpg',
		link: 'https://apod.nasa.gov/',
		pinned: true,
	},
	// placeholder project 3
	{
		title: 'Placeholder Project 3',
		image: 'https://apod.nasa.gov/apod/image/1905/CarinaWideField_Willasch_1080.jpg',
		link: 'https://apod.nasa.gov/',
		pinned: true,
	},
];


// Automagically turns the highlevelHighlightsData into components
const ProjectHighlights = (props) => (
	<div>
		<div style={{
			padding: '1vmin',
			textAlign: 'center',
		}}>
			<h2>More Projects</h2>
			<p>Here's some more things I've built or contributed to</p>
		</div>
		{projectsData && projectsData.length && (
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
				{projectsData
					.filter(item => item.pinned === true)
					.map(({title, description, image, link, pinned}, idx) => (
					<div style={{
						//border: '1vmin solid blue',
						minWidth: '18.5vmin',
						maxWidth: '30vmin',
						padding: '3vmin',
						flex: 'auto',
						}}
						key={`project-highlight-${idx}`}>
						<a href={link}>
							<img style={{
								padding: '1vmin',
								width: '21vmin',
								height: '21vmin',
								borderRadius: '50%',
								}}
								src={image} 
								alt={title}/>
						</a>
					</div>
				))}
			</div>
		)};
	</div>
);

// export the component
export default ProjectHighlights 
