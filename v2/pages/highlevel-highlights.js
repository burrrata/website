import React from 'react';


// NOTE
// This is currently being maintained inside of index.js and not imported. This is (likely) an outdated version.

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
function HighlevelHighlights() {
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
		</div>
	);
}


// export the component
export default HighlevelHighlights
