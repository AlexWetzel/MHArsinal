import React from 'react';
import "./InfoPanel.css";

			// <h3>{props.name}</h3>
const InfoPanel = props =>
	<div id="info_panel" className="row">
		<div className="container">

			<hr />
			<p>{props.description}</p>
		</div>
	</div>;

export default InfoPanel;