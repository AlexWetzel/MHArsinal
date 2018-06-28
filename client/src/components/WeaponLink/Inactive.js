import React from "react";
import './inactive.css';

export const Inactive = props =>

	<div className="col s12 l6 xl4 white-text">

			<div className="inactive">
				<img src={props.src} alt={props.name} />
				<span><h4>{props.name}</h4></span>
			</div>

	</div>;