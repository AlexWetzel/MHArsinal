import React from 'react';
import { Link } from 'react-router-dom';
import './weaponSection.css'

const WeaponSection = props =>		
	<div className="weapon-section">
		<div className="wide-section">
			<div className="container row weapon-attributes">
				<div className="col s2">
					<img src={props.src} alt={props.name}/>
				</div>
				<div className="col s10">
					<h3>{props.name}</h3>
					<hr />
					<h5>
						Power: {props.stats[0]}/5 &nbsp;&nbsp;&nbsp;
						Speed: {props.stats[1]}/5 &nbsp;&nbsp;&nbsp;
						Mobility: {props.stats[2]}/5 &nbsp;&nbsp;&nbsp;
						Defense: {props.stats[3]}/5 &nbsp;&nbsp;&nbsp;
						Support: {props.stats[4]}/5
					</h5>
				</div>
			</div>
		</div>

		<div className="container">
			<p>{props.text}</p>
			<Link to={props.link} class="waves-effect waves-light btn"><h5>Full Tutorial</h5></Link>
		</div>
	</div>;

export default WeaponSection;