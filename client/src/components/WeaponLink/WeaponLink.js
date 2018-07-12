import React from "react";
import { Link } from 'react-router-dom'
import './weaponLink.css';

export const WeaponLink = props =>

	<div className="col s12 l6 xl4 white-text">
		<Link to={props.link}>
			<div className="weapon-link">
				<img src={props.src} alt={props.name} />
				<span><h4>{props.name}</h4></span>
			</div>
		</Link>
	</div>;