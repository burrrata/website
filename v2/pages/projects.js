// This page is basically the same thing as the Showcase component in index.js
//
// note: the version here is old and copied from Docusaurus V1



/*
// Placeholder
const PROJECTS = null;
// Showcase Component
const Showcase = () => {
	// Don't display the showcase if there are no items
	if ((PROJECTS.project || []).length === 0) {
		return null;
	}
	// Process the items
	const showcase = PROJECTS.project
		.filter(project => project.pinned)
		.map(project => (
			<a href={project.infoLink} key={project.infoLink}>
				<img src={project.image} alt={project.caption} title={project.caption} />
			</a>
		));
	// Return the showcase items
	return (
		<div>
			<h2>
				More Projects
			</h2>
			<p>
				Here's more things I've built or contributed to
			</p>
			<div>
				{showcase}
			</div>
			<div>
				<a 
					className="button" 
					href=''
				>
					More Projects 
				</a>
			</div>
		</div>
	);
};
*/

/*
const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using This?</h1>
              <p>This project is used by many folks</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you using this project?</p>
            <a href={editUrl} className="button">
              Add your company
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
*/
