import React from 'react';


// projects data
const projectsData = [
	// Meta
	{
		title: 'meta',
		tagline: 'Things that make it easier to learn about and use new technologies.',
		description: '',
		image: 'https://waitbutwhy.com/wp-content/uploads/2018/04/How-do-you-work-4.png',
		link: 'https://github.com/burrrata/meta',
		pinned: true,
	},
	// 1Hive 
	{
		title: '1Hive',
		tagline: 'Helping Open Source Communities Thrive',
		description: '1Hive is a decentralized autonomous organization working to grow an open source commons and improve open source sustainability.',
		image: 'https://avatars3.githubusercontent.com/u/29875830?s=200&v=4',
		link: 'https://1hive.org/',
		pinned: true,
	},
	// Molochasaurus
	{
		title: 'Molochasaurus',
		tagline: 'Everything related to the MolochDAO.',
		description: '',
		image: 'https://github.com/burrrata/molochasaurus/blob/master/website/static/img/moloch-background.jpg?raw=true',
		link: 'https://www.burrrata.ch/molochasaurus',
		pinned: true,
	},
	// Aragon Cooperative
	{
		title: 'Aragon Cooperative',
		tagline: '',
		description: '',
		image: 'https://avatars1.githubusercontent.com/u/46876207?s=200&v=4',
		link: 'https://mainnet.aragon.org/#/0x940B2B518F761f4c52CDd9865C57D9a907DC5E82/',
		pinned: true,
	},
	// Image Viewer
	{
		title: 'Image Viewer',
		tagline: '',
		description: '',
		image: 'https://apod.nasa.gov/apod/image/1904/M87bh_EHT_2629.jpg',
		link: 'https://www.burrrata.ch/image-viewer/',
		pinned: true,
	},
	// APOD Archive Scraper
	{
		title: 'APOD Archive Scraper',
		tagline: '',
		description: '',
		image: 'https://apod.nasa.gov/apod/image/1906/Mice_LRGB_web.jpg',
		link: 'https://github.com/burrrata/apod-archive-scraper',
		pinned: true,
	},
	// Tic Tac Toe
	{
		title: 'Tic-Tac-Toe Game of Life',
		tagline: 'An interactive Tic Tac Toe game who\'s final state initializes a Game of Life.',
		description: '',
		image: 'https://raw.githubusercontent.com/burrrata/tic-tac-toe/master/tic-tac-toe.png',
		link: 'https://www.burrrata.ch/tic-tac-toe/',
		pinned: true,
	},
	// Ethereum Magicians: integrity ring
	{
		title: 'Ethereum Magicians: integrity ring',
		tagline: '',
		description: '',
		image: 'https://ethereumevents.global/assets/fellowship-logomark.png',
		link: 'https://github.com/ethereum-magicians/integrity-ring',
		pinned: true,
	},
	// Are We There Yet
	{
		title: 'Are We There Yet',
		tagline: '',
		description: '',
		image: 'https://raw.githubusercontent.com/burrrata/are_we_there_yet/master/are%20we%20there%20yet.png',
		link: 'https://www.burrrata.ch/are_we_there_yet/',
		pinned: true,
	},
	// Rusty Cryptoeconomics
	{
		title: 'Rusty Cryptoeconomics',
		tagline: 'How to roll a blockchain from scratch with Rust.',
		description: '',
		image: 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg',
		link: 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html',
		pinned: true,
	},
	// Research
	{
		title: 'research',
		tagline: '',
		description: '',
		image: 'https://assets4.bigthink.com/system/tinymce_assets/3261/original/thinker.jpg?1471139663',
		link: 'https://github.com/burrrata/research',
		pinned: true,
	},
	// Entropy
	{
		title: 'Entropy',
		tagline: 'A simple secure passphrase generator.',
		description: '',
		image: 'https://camo.githubusercontent.com/80ed774dd004f7901a4819cbdea6150211d01725/68747470733a2f2f696d67732e786b63642e636f6d2f636f6d6963732f70617373776f72645f737472656e6774682e706e67',
		link: 'https://www.burrrata.ch/entropy',
		pinned: true,
	},
];


// Automagically turns the highlevelHighlightsData into components
export const ProjectHighlights = (props) => (
	<div>
		<div style={{
			padding: '1vmin',
			textAlign: 'center',
		}}>
			<h1>More Stuff</h1>
			<p>things I've built or contributed to</p>
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
					.map(({title, tagline, image, link, pinned}, idx) => (
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
						<h4>{title}</h4>
					</div>
				))}
			</div>
		)};
	</div>
);


// a generic component that takes in data to display
export const ProjectsOverview = (props) => (
	<div style={{
		padding: '5vmin',
	}}>
		<div style={{
			padding: '5vmin',
			textAlign: 'center',
			fontSize: '3vmin',
		}}>
			<h1>
				Projects
			</h1>
			<p>
				things I've built or contributed to
			</p>
		</div>
		<div>
		{projectsData && projectsData.length && (
			<div style={{
				padding: '5vmin',
				}}>
				{projectsData.map(({title, tagline, description, image, link}, idx) => (
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
							<h3>
								{tagline}
							</h3>
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



// export the component
export default ProjectsOverview
