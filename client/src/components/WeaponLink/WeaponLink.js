import React from "react";
import './weaponLink.css';

const WeaponLink = props =>

	<div className="col s12 l6 xl4 white-text">
		<a href={props.link}>
			<div className="weapon-link">
				<img src={props.src} alt={props.name} />
				<span><h4>{props.name}</h4></span>
			</div>
		</a>
	</div>;

export default WeaponLink;