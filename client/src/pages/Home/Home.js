import React from 'react';
import WeaponLink from './../../components/WeaponLink'
import "./home.css";

const Home = () =>
	<div>
		<div id="home-title" className="">
	 		<h1 className="center-align">MONSTER HUNTER ARMS</h1>
	 	</div>

	  <div className="center-align white description">
	 		<p>Learn the weapons of monster hunter</p>

	 		<div className="section">
		 		<div className="row container">
		 			<div className=" col s6">
		 				<a href="/weapons">
			 				<div className="weapons-window">
				 				<div className="white">
				 					<h5>Weapons Page</h5>
				 				</div>
			 				</div>
		 				</a>
		 			</div>
		 			<div className="col s6">
		 				<a href="/combo">
				 			<div className="combo-window">
				 				<div className="white">
				 					<h5>Combo test</h5>
				 				</div>
			 				</div>
		 				</a>
		 			</div>
		 		</div>
		 	</div>

		 	<div className="container">
		 		<div className="row">
			 		<div className="col s12">
			 			<h3>Weapons</h3>
			 			<hr />
			 		</div>
		 		</div>

			 	<div className="row">
			 		<WeaponLink
			 			key={"Greatsword"}
			 			name={"Greatsword"}
			 			link={"/greatsword"}
			 			src={"./images/GS_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Longsword"}
			 			name={"Longsword"}
			 			link={"/longsword"}
			 			src={"./images/LS_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Sword & Shield"}
			 			name={"Sword & Shield"}
			 			link={"/swordandshield"}
			 			src={"./images/SnS_icon.png"}
			 		/>
			 	</div>


			 	<div className="row">
			 		<WeaponLink
			 			key={"Dual Blades"}
			 			name={"Dual Blades"}
			 			link={"/dualblades"}
			 			src={"./images/DB_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Hammer"}
			 			name={"Hammer"}
			 			link={"/hammer"}
			 			src={"./images/Ham_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Hunting Horn"}
			 			name={"Hunting Horn"}
			 			link={"/huntinghorn"}
			 			src={"./images/HH_icon.png"}
			 		/>
			 	</div>


			 	<div className="row">
			 		<WeaponLink
			 			key={"Lance"}
			 			name={"Lance"}
			 			link={"/lance"}
			 			src={"./images/Lan_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Gunlance"}
			 			name={"Gunlance"}
			 			link={"/gunlance"}
			 			src={"./images/GL_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Switch Axe"}
			 			name={"Switch Axe"}
			 			link={"/switchaxe"}
			 			src={"./images/SA_icon.png"}
			 		/>
			 	</div>


			 	<div className="row">
			 		<WeaponLink
			 			key={"Charge Blade"}
			 			name={"Charge Blace"}
			 			link={"/chargeblade"}
			 			src={"./images/CB_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Insect Glaive"}
			 			name={"Insect Glaive"}
			 			link={"/insectglaive"}
			 			src={"./images/IG_icon.png"}
			 		/>
			 		<WeaponLink
			 			key={"Light Bowgun"}
			 			name={"Light Bowgun"}
			 			link={"/lightbowgun"}
			 			src={"./images/LBG_icon.png"}
			 		/>
			 	</div>


			 	<div className="row">
			 		<WeaponLink
			 			key={"Heavy Bowgun"}
			 			name={"Heavy Bowgun"}
			 			link={"/heavybowgun"}
			 			src={"./images/HBG_icon.png"}
			 		/>
			 		<WeaponLink
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