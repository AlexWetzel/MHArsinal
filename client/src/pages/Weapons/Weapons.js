import React from 'react';

import WeaponSection from './../../components/WeaponSection'
import './weapons.css'

const Weapons = () =>
	<div>

		<div className="container">
			<h1>Weapons Overview</h1>
		
			<div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris,</p>
			</div>
		</div>

		<WeaponSection 
			key={"Great Sword"}
			name={"Great Sword"}
			src={"./images/GS_icon.png"}
			link={"/greatsword"}
			stats={[5,1,2,3,3]}
			text={"The greatsword is a heavy weapon capable of dealing high damage with powerful charge attacks. " +
				"Charging a greatsowrd swing takes time, but the payoff is well worth it. " +
				"While charging, you can cancel the charge into a tackle, letting you plough through enemy attacks without being flinched. " +
				"The greatsowrd's weight reduces your mobility, but its relatively quick sheathing makes hit-and-run tactics viable."  +
				"In a pinch, it can be used to block attacks, but this will wear the weapon down. " +
				"While a hunter's skill is contingent on how well they can read they can read the monster's movements, this is doubly so for the greatsword."
			}
		/>
		<WeaponSection 
			key={"Long Sword"}
			name={"Long Sword"}
			src={"./images/LS_icon.png"}
			link={"/longsword"}
			stats={[3,4,3,3,1]}
			text={"The longsword is a long-reaching blade that builds spirit energy upon attacking. " +
						"Spirit energy is used for special attacks, such as fast hitting combos, defensive counterattacks, and aerial finishers. " +
						"An elegant weapon, the longsword can pivot around monsters with the fade slash, positioning itself away from harm while attacking. " +
						"Longsword user must be careful around other hunters, as its wide slashes can cause allies to flinch."
			}
		/>
		<WeaponSection 
			key={"Sword & Shield"}
			name={"Sword & Shield"}
			src={"./images/SnS_icon.png"}
			link={"/swordandshield"}
			stats={[1,4,4,2,5]}
			text={"Fast, versitile, and easy to use, the sword and shield a great weapon for beginners and experts alike. " +
						"The sword and shield attack quickly, making them ideal for status or elemental weapons. " +
						"Along with the ability to use items while drawn, this weapon is excellent for exploiting a monster's weakness as well as supporting allies" +
						"However, hunters using this weapon neet to stay agressive, as its power per swing and its reach are poor."
			}
		/>
		<WeaponSection 
			key={"Great Sword"}
			name={"Great Sword"}
			src={"./images/GS_icon.png"}
			link={""}
			stats={[5,1,2,3,3]}
			text={"The greatsword is a heavy weapon capable of dealing high damage with powerful charge attacks. " +
				"Charging a greatsowrd swing takes time, but the payoff is well worth it. " +
				"While charging, you can cancel the charge into a tackle, letting you plough through enemy attacks without being flinched. " +
				"The greatsowrd's weight reduces your mobility, but its relatively quick sheathing makes hit-and-run tactics viable."  +
				"In a pinch, it can be used to block attacks, but this will wear the weapon down. " +
				"While a hunter's skill is contingent on how well they can read they can read the monster's movements, this is doubly so for the greatsword."
			}
		/>
		<WeaponSection 
			key={"Great Sword"}
			name={"Great Sword"}
			src={"./images/GS_icon.png"}
			link={""}
			stats={[5,1,2,3,3]}
			text={"The greatsword is a heavy weapon capable of dealing high damage with powerful charge attacks. " +
				"Charging a greatsowrd swing takes time, but the payoff is well worth it. " +
				"While charging, you can cancel the charge into a tackle, letting you plough through enemy attacks without being flinched. " +
				"The greatsowrd's weight reduces your mobility, but its relatively quick sheathing makes hit-and-run tactics viable."  +
				"In a pinch, it can be used to block attacks, but this will wear the weapon down. " +
				"While a hunter's skill is contingent on how well they can read they can read the monster's movements, this is doubly so for the greatsword."
			}
		/>




	</div>;

export default Weapons;