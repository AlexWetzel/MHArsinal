import React from 'react';
import { Link } from 'react-router-dom';
import './LinkPanel.css';

export const LinkPanel = (props) =>

	<div className="col s12 m6">
		<Link to={props.link}>
			<div id={props.id} className="link-panel">
				<h3 className="center-align">{props.title}</h3>
			</div>
		</Link>
	</div>;