import React from 'react';

// Why do we need a Regenerator Runtime?
const fetch = require('node-fetch');
const regeneratorRuntime =  require("regenerator-runtime");


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
              paddingTop: '10vmin',
            }}>
            <h2>
							{props.title}
						</h2>
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
				<img style={{
              width: '33vmin',
              height: '33vmin',
							borderRadius: '50%',
						}}
						src={props.image} />
				</div>
		</div>
);


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
    
    // highlight 1
    const highlight1 = {
      title: 'Here\'s an APOD:',
      description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.',
      image: 'https://apod.nasa.gov/apod/image/1905/Trumpler14_Hubble_960.jpg',
    };

    // highlight 2
    const highlight2 = {
      title: 'Here\'s today\'s APOD:',
      description: 'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.',
      image: `${this.state.apod}`,
    };

    // return the components in a container with a little padding
    return (
      <div style={{
          padding: '5vmin',
        }}>
        <Highlight {...highlight1} />
        <Highlight {...highlight2} />
      </div>
    );
  }
}


// export the component
export default HightlightsSection
