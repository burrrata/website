import React from 'react';

import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';


// projects data
const projectsData = [
	// Cryptoeconomics.Study
	{
		title: 'Cryptoeconomics.Study',
		tagline: 'Everything you Need to Learn The Fundamentals Of Cryptoeconomics',
		description: 'Cryptoeconomics.Study is a 1 Stop Shop For Cryptoeconomic Mechanism Design. The course is broken down into chunks, each chapter focusing on a particular flavor of cryptoeconomic mechanisms, and each subsection focusing in on the practical real world tools that make it happen. We present this material in the form of engaging lectures, detailed documentation and resources to dive deeper on all topics covered, and challenging coding assignments. This will get you familiar with concepts, tooling, and workflow used to build cryptoeconomic systems in the real world on Ethereum!',
		image: 'https://i.imgur.com/XzsEQmk.png',
		link: 'https://www.burrrata.ch/ces-website/',
		pinned: true,
	},
	// Daonuts
	{
		title: 'Daonuts',
		tagline: 'tools for self-sovereign online communities',
		description: 'Daonuts is a project to empower Reddit communities with Ethereum based tools for governance and engagement. This is an unprecedented opportunity to demonstrate the power of Ethereum to users of one of the most trafficked web destinations in the world. More importantly, this opens the door to self-sovereign communities - communities that exist on their own and have the tools to chart their own destiny.',
		image: 'https://www.burrrata.ch/daonuts-website/img/favicon.ico',
		link: 'https://www.burrrata.ch/daonuts-website/',
		pinned: true,
	},
	// Meta
	{
		title: 'Meta',
		tagline: 'making it easier to learn about and use new technologies',
		description: 'There\'s lot of problems in the world. Most of those problems cannot be solved with the same level of thinking that created them. We need to evolve.',
		image: 'https://waitbutwhy.com/wp-content/uploads/2018/04/How-do-you-work-4.png',
		link: 'https://github.com/burrrata/meta',
		pinned: false,
	},
	// 1Hive 
	{
		title: '1Hive',
		tagline: 'helping open source communities thrive',
		description: '1Hive is a decentralized autonomous organization working to grow an open source commons and improve open source sustainability.',
		image: 'https://avatars3.githubusercontent.com/u/29875830?s=200&v=4',
		link: 'https://1hive.org/',
		pinned: true,
	},
	// Molochasaurus
	{
		title: 'Molochasaurus',
		tagline: 'all things MolochDAO 👹',
		description: 'A website that aggregates information and resources related to the MolochDAO.',
		image: 'https://github.com/burrrata/molochasaurus/blob/master/website/static/img/moloch-background.jpg?raw=true',
		link: 'https://www.burrrata.ch/molochasaurus',
		pinned: true,
	},
	// Aragon Cooperative
	{
		title: 'Aragon Cooperative',
		tagline: 'a community driven Aragon organization',
		description: 'The Aragon Cooperative functions to support grass roots community initiatives in the broader Aragon ecosystem.',
		image: 'https://avatars1.githubusercontent.com/u/46876207?s=200&v=4',
		link: 'https://mainnet.aragon.org/#/0x940B2B518F761f4c52CDd9865C57D9a907DC5E82/',
		pinned: false,
	},
	// Image Viewer
	{
		title: 'Image Viewer',
		tagline: 'client side image slideshow app',
		description: 'A web app that allows users to submit a text file with a list of image URLs and then view a slideshow that randomly displays images from that list.',
		image: 'https://apod.nasa.gov/apod/image/1904/M87bh_EHT_2629.jpg',
		link: 'https://www.burrrata.ch/image-viewer/',
		pinned: false,
	},
	// APOD Archive Scraper
	{
		title: 'APOD Archive Scraper',
		tagline: 'making the APOD archive programatically accessible',
		description: 'Scripts to scrape the NASA APOD Archive and returns a text file with the direct URLs of NASA APOD images',
		image: 'https://apod.nasa.gov/apod/image/1906/Mice_LRGB_web.jpg',
		link: 'https://github.com/burrrata/apod-archive-scraper',
		pinned: false,
	},
	// Tic Tac Toe
	{
		title: 'Tic-Tac-Toe Game of Life',
		tagline: 'click to play',
		description: 'An interactive Tic Tac Toe game who\'s final state initializes a Game of Life.',
		image: 'https://raw.githubusercontent.com/burrrata/tic-tac-toe/master/tic-tac-toe.png',
		link: 'https://www.burrrata.ch/tic-tac-toe/',
		pinned: true,
	},
	// Ethereum Magicians: integrity ring
	{
		title: 'Ethereum Magicians: Integrity Ring',
		tagline: 'improving Ethereum the community experience through empathy and communication',
		description: 'The Ethereum Magicians exists to improve coordination and cooperation within the Ethereum ecosystem, and the Integrity ring focuses on the communication aspects of that.',
		image: 'https://ethereumevents.global/assets/fellowship-logomark.png',
		link: 'https://github.com/ethereum-magicians/integrity-ring',
		pinned: false,
	},
	// Are We There Yet
	{
		title: 'Are We There Yet',
		tagline: 'a meditation on life, happiness, and wage compensation in a modern world',
		description: 'Exploring the "happiness benchmark", what it really means, and what that looks like in 2019.',
		image: 'https://raw.githubusercontent.com/burrrata/are_we_there_yet/master/are%20we%20there%20yet.png',
		link: 'https://www.burrrata.ch/are_we_there_yet/',
		pinned: false,
	},
	// Rusty Cryptoeconomics
	{
		title: 'Rusty Cryptoeconomics',
		tagline: 'how to roll a blockchain from scratch with Rust',
		description: 'Exploring blockchains from first principles, starting with a centralized b2c database and iteratively building towards a decentralized p2p database (aka a blockchain).',
		image: 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg',
		link: 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html',
		pinned: true,
	},
	// Research
	{
		title: 'Research',
		tagline: 'forked from vbuterin\'s models of Charity Through Marginal Price Descrimination',
		description: 'Exploring how cryptoeconomic mechanisms could help solve coordination problems in social settings.',
		image: 'https://assets4.bigthink.com/system/tinymce_assets/3261/original/thinker.jpg?1471139663',
		link: 'https://github.com/burrrata/research',
		pinned: false,
	},
	// Entropy
	{
		title: 'Entropy',
		tagline: 'a single file passphrase generator',
		description: 'Passwords are hard. They don\'t have to be. Entropy is a project to make it easy to understand and use passphrases.',
		image: 'https://camo.githubusercontent.com/80ed774dd004f7901a4819cbdea6150211d01725/68747470733a2f2f696d67732e786b63642e636f6d2f636f6d6963732f70617373776f72645f737472656e6774682e706e67',
		link: 'https://www.burrrata.ch/entropy',
		pinned: true,
	},
];


// Automagically turns the highlevelHighlightsData into components
export const ProjectHighlights = (props) => (
	<div
		style={{
			padding: '5vmin',
		}}
	>
		<div style={{
			padding: '1vmin',
			textAlign: 'center',
		}}>
			<h1>
				Cool Stuff
			</h1>
			<h3>
				I've built or contributed to
			</h3>
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
		<div style={{
			paddingBottom: '10vmin',
			textAlign: 'center',
		}}>
			<Link
				className={classnames(
					'button button--outline button--primary button--lg',
					styles.getStarted,
				)}
				style={{
					background: 'white',
					border: 'solid 0.5vmin',
				}}
				to={withBaseUrl('projects')}>
				More Projects
			</Link>
		</div>
	</div>
);


// a generic component that takes in data to display
export const ProjectsOverview = (props) => (
	<Layout>
		<div
			style={{
			}}
		>
			<div
				style={{
					padding: '10vmin',
					textAlign: 'center',
					fontSize: '3vmin',
					backgroundColor: 'rgba(0, 0, 0, 0.3)',	
				}}
			>
			<div>
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
								<h1>
									{title}
								</h1>
							</a>
							<h2>
								{tagline}
							</h2>
							<h3>
								{description}
							</h3>
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
	</div>
</Layout>
);



// export the component
export default ProjectsOverview
