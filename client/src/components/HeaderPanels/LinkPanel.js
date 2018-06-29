import React from 'react';
import './LinkPanel.css';

export const LinkPanel = (props) =>

	<div className="col s12 m6">
		<a href={props.link}>
			<div id={props.id} className="link-panel">

				<h3 className="center-align">{props.title}</h3>

			</div>
		</a>
	</div>;