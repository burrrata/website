/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

// My Custom Components
import HomeSplash from './homesplash.js';
import Highlights from './highlights.js';
import HighlevelHighlights from './highlevel-highlights.js';
import Highlight from './components/highlight.js';

// Why do we need these?
const fetch = require('node-fetch');
const regeneratorRuntime =  require("regenerator-runtime");





// a component that holds stateful data and passes those to highlight components
class HighlightsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: null,
    };
  }

  componentDidMount() {
    this.getLatestAPOD()
  }
  
  async getLatestAPOD() {
    //const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=ExE5PaDrbnGZ8yZfAXdWF4cd4vw9sB8QcKMNVrUg';
		const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
		let response = await fetch(APOD_API);
		let data = await response.json();
	  let url = await data.url;
    this.setState({
      apod: url
      // use a fixed URL for testing as to not max out the APOD API limits
      //apod: 'https://apod.nasa.gov/apod/image/1906/M96_HubbleShatz_960.jpg',
    })
  }
 
  // render
  render () {
    
    // generic APOD data 
    const genericAPOD = {
      title: 'Here\'s an APOD:',
      description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.',
      image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
    };

    // latest APOD data
    const latestAPOD = {
      title: 'Here\'s today\'s APOD:',
      description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.',
      image: `${this.state.apod}`,
    };

		// Entropy
		const entropy = {
			title: 'Entropy',
			link: 'https://www.burrrata.ch/entropy',
			description: 'A simple secure single file passphrase generator.',
			image: 'https://camo.githubusercontent.com/80ed774dd004f7901a4819cbdea6150211d01725/68747470733a2f2f696d67732e786b63642e636f6d2f636f6d6963732f70617373776f72645f737472656e6774682e706e67',
		}

		// Rusty Cryptoeconomics
		const rustyCryptoeconomics = {
			title: 'Rusty Cryptoeconomics',
			link: 'https://www.burrrata.ch/rusty_cryptoeconomics/intro.html',
			description: 'How to roll a blockchain from scratch with Rust.',
			image: 'https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg',
		}

		// Tic Tac Toe
		const ticTacToe = {
			title: 'Tic Tac Toe',
			link: 'https://www.burrrata.ch/tic-tac-toe/',
			description: 'An interactive Tic Tac Toe game used to initialize a Game of Life.',
			image: 'https://github.com/burrrata/tic-tac-toe/blob/master/tic-tac-toe.png?raw=true',
		}

		// Molochasaurus
		const molochasaurus = {
			title: 'Molochasaurus',
			link: 'https://www.burrrata.ch/molochasaurus',
			description: 'Everything related to the MolochDAO.',
			image: 'https://github.com/burrrata/molochasaurus/blob/master/website/static/img/moloch-background.jpg?raw=true',
		}


    // return the components in a container with a little padding
    return (
      <div style={{
          padding: '5vmin',
        }}>
        <Highlight {...genericAPOD} />
        <Highlight {...latestAPOD} />
				<Highlight {...entropy} />
				<Highlight {...rustyCryptoeconomics} />
				<Highlight {...ticTacToe} />
				<Highlight {...molochasaurus} />
      </div>
    );
  }
}



// Homepage Component
function Home() {

	// useful stuff
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;



	// return the components
  return (
    <Layout>
			<HomeSplash />
			<HighlevelHighlights />
			<HighlightsSection />
    </Layout>
  );
}

export default Home;
