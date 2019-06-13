import React from 'react';

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
						<a href={props.link}>
							<h2>
								{props.title}
							</h2>
						</a>
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
				<a href={props.link}>
					<img style={{
								width: '33vmin',
								height: '33vmin',
								borderRadius: '50%',
							}}
							src={props.image} />
					</a>
				</div>
		</div>
);

// export the component
export default Highlight
