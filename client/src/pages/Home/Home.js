import React from 'react';
import { WeaponLink, Inactive } from './../../components/WeaponLink';
import "./home.css";

const Home = () =>
	<div>
		<div id="home-title" className="">
			<div className="title-shade"></div>
	 		<h1 className="center-align">MONSTER HUNTER ARMS</h1>
	 	</div>

	  <div className="center-align white description">
	 		<div className="container">
	 		<h3>Learn the weapons of Monster Hunter</h3>
	 		<hr />
	 		<p>
		 		With 14 uniqe weapons Monster Hunter World offers a variety of ways to hunt your prey.
		 		However, mastering just one weapon can be difficult.
		 		Monster Hunter Arms not only offers comprehensive weapon breakdowns, but also an interactive flowchart that displays every option after each attack.
	 		</p>
	 		</div>

	 		<div className="section">
		 		<div className="row container">
		 			<div className=" col s12 m6">
		 				<a href="/weapons">
			 				<div className="weapons-window">
				 				<div className="window-shade"></div>
				 				<h3 className="center-align">Weapons Overview</h3>

			 				</div>
		 				</a>
		 			</div>
		 			<div className="col s12 m6">
		 				<a href="/combo">
				 			<div className="combo-window">
				 				<div className="window-shade"></div>

				 				<h3 className="center-align">Combo Test</h3>
	
			 				</div>
		 				</a>
		 			</div>
		 		</div>
		 	</div>

		 	<div className="container">
		 		<div className="row">
			 		<div className="col s12">
			 			<h3>Weapon Guides</h3>
			 			<hr />
			 		</div>
		 		</div>

			 	<div className="row">
			 		<Inactive
			 			key={"Greatsword"}
			 			name={"Greatsword"}
			 			link={"/greatsword"}
			 			src={"./images/GS_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Longsword"}
			 			name={"Longsword"}
			 			link={"/longsword"}
			 			src={"./images/LS_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Sword & Shield"}
			 			name={"Sword & Shield"}
			 			link={"/swordandshield"}
			 			src={"./images/SnS_icon.png"}
			 		/>			 	
			 		<Inactive
			 			key={"Dual Blades"}
			 			name={"Dual Blades"}
			 			link={"/dualblades"}
			 			src={"./images/DB_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Hammer"}
			 			name={"Hammer"}
			 			link={"/hammer"}
			 			src={"./images/Ham_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Hunting Horn"}
			 			name={"Hunting Horn"}
			 			link={"/huntinghorn"}
			 			src={"./images/HH_icon.png"}
			 		/>			 	
			 		<Inactive
			 			key={"Lance"}
			 			name={"Lance"}
			 			link={"/lance"}
			 			src={"./images/Lan_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Gunlance"}
			 			name={"Gunlance"}
			 			link={"/gunlance"}
			 			src={"./images/GL_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Switch Axe"}
			 			name={"Switch Axe"}
			 			link={"/switchaxe"}
			 			src={"./images/SA_icon.png"}
			 		/>			 	
			 		<WeaponLink
			 			key={"Charge Blade"}
			 			name={"Charge Blade"}
			 			link={"/chargeblade"}
			 			src={"./images/CB_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Insect Glaive"}
			 			name={"Insect Glaive"}
			 			link={"/insectglaive"}
			 			src={"./images/IG_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Light Bowgun"}
			 			name={"Light Bowgun"}
			 			link={"/lightbowgun"}
			 			src={"./images/LBG_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Heavy Bowgun"}
			 			name={"Heavy Bowgun"}
			 			link={"/heavybowgun"}
			 			src={"./images/HBG_icon.png"}
			 		/>
			 		<Inactive
			 			key={"Bow"}
			 			name={"Bow"}
			 			link={"/bow"}
			 			src={"./images/Bow_icon.png"}
			 		/>
			 	</div>
		 	</div>
	  </div>
	</div>;

export default Home;