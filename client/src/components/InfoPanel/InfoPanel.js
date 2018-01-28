import React from 'react';
import "./InfoPanel.css";

const InfoPanel = props =>
	<div id="info_panel" className="row">
		<div className="container">
			<h3>{props.name}</h3>
			<p>{props.description}</p>
		</div>
	</div>;

export default InfoPanel;