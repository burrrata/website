const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; 
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const fetch = require('node-fetch');
const regeneratorRuntime =  require("regenerator-runtime");



// Home Splash Container
class HomeSplash extends React.Component {
  render() {

		// Useful stuff
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

		// Splash container
    const SplashContainer = props => (
			<div className="homeContainer splash">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

		// Logo
    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

		// Project title
    const ProjectTitle = () => (
			<div>
				<br />
				<br />
				<h1 className="projectTitle">
					{siteConfig.title}
					<small>{siteConfig.tagline}</small>
				</h1>
			</div>
    );

		// Promo section
    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

		// Button
    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button margin2vmin whiteBackground" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

		// Profile pics
		const ProfilePics = () => (
      <div className='appModule'>
        <div className='appModuleTitle'>
					<img 
						className='profileImage'
						src="https://thispersondoesnotexist.com/image"
					/>
				</div>
			</div>
		);

		// Return the components
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
					<ProfilePics />
          <PromoSection>
            <Button href="#ticTacToe">Projects</Button>
            <Button href={docUrl('help.html')}>Contact</Button>
            <Button href={docUrl('blog.html')}>Blog</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}




// Main Index Component
class Index extends React.Component {
	// init state
  constructor(props) {
    super(props);
    this.state = {
      apod: null,
    };
  }

	// run async function
  componentDidMount() {
		//this.getLatestAPOD()
    this.timerAPOD = setInterval(
			() => { 
				this.getLatestAPOD();
			},
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerAPOD);
  }

	// function to get latest APOD image url
  async getLatestAPOD() {
		const APOD_API = 'https://api.nasa.gov/planetary/apod?api_key=ExE5PaDrbnGZ8yZfAXdWF4cd4vw9sB8QcKMNVrUg';
		let response = await fetch(APOD_API);
		let data = await response.json();
	  let url = await data.url;
    this.setState({
      apod: url
    })
  }

	// render the components
  render() {
;
		// Useful Stuff
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

		// Block Component
    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

		// Features Block
    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            title: 'Fullstack Developer',
            content: 'Experience with Python, React, Rust, and more',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
          },
          {
            title: 'Insatiably Curious',
            content: 'Constantly exploring the cutting edge of technology',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
          },
          {
            title: 'Building For You',
            content: 'Apps, websites, and docs that are easy to understand and use',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
          },
        ]}
      </Block>
    );
		
		// Main Feature Callout
    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>About Me</h2>
				<MarkdownBlock>
						I spend the majority of my time careening through the internet exploring decentralized networks, AI, and anything that improves the user experience. I care deeply about improving human education, cooperation, coordination. One of my favority things in the world is positive sum incentive alignment mechanisms (cryptoeconomics) that support the development of the commons. 
				</MarkdownBlock>
      </div>
    );

		// Tic Tac Toe
    const TicTacToe = () => (
      <Block id="ticTacToe">
        {[
          {
						title: '[Interactive Tic Tac Toe](https://www.burrrata.ch/tic-tac-toe/)',
            content: 'Click a square to begin. The board will play back. If you win you\'ll get a reward!',
            image: `${baseUrl}img/tic-tac-toe.png`,
            imageAlign: 'left',
          },
        ]}
      </Block>
    );

		// Rusty Cryptoeconomics
    const RustyCryptoeconomics = () => (
      <Block background="dark">
        {[
          {
						title: '[Rusty Cryptoeconomics](https://www.burrrata.ch/rusty_cryptoeconomics/)',
            content: 'This project explores blockchains from first principles, starting with a centralized b2c database and iteratively building towards a decentralized p2p database (aka a blockchain). You\'ll first build a foundation of knowledge about crypto and blockchain concepts, then you\'ll use that to think about and build cryptoeconomic mechanisms, eventually you\'ll be able to build apps and protocols that incentivize people to take action.',
            image: `https://github.com/burrrata/rusty_cryptoeconomics/raw/master/readme.jpg`,
            imageAlign: 'right',
          },
        ]}
      </Block>
    );

		// ApodopA 
		const ApodopA = () => (
		<Block background="light">
			{[
				{
					title: 'ApodopA',
					content: 'Exploring NASA\'s APOD archive to create things that did not exist before',
					//image: `${this.state.apod}`,
					imageAlign: 'left',
				},
			]}
		</Block>
		);

		// Showcase Component
    const Showcase = () => {
			// Don't display the showcase if there are no items
      if ((siteConfig.users || []).length === 0) {
        return null;
      }
			// Process the items
      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));
			// Determine the pageUrl
      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;
			// Return the showcase items
      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>More Projects</h2>
          <p>Here's some more things I've built or contributed to</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More Projects 
            </a>
          </div>
        </div>
      );
    };

		// Return the Components
    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
					<Features />
					<FeatureCallout />
					<TicTacToe />
					<RustyCryptoeconomics />
					<ApodopA />
          <Showcase />
        </div>
      </div>
    );
  }
}


// Export the Index component
module.exports = Index;
