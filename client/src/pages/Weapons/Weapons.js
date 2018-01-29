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
			key={"Dual Blades"}
			name={"Dual Blades"}
			src={"./images/DB_icon.png"}
			link={"/dualblades"}
			stats={[1,5,5,1,3]}
			text={"What this weapon lacks in power, it makes up for in speed." +
						"The dual blades are fast in every sense: attack speed, movement, evasion, and sheath speed are all top notch" +
						"Demon mode ups the ante, granting faster movement, dash evades, and increased attack power at the cost of stamina. " +
						"The fast attack speed makes this weapon well suited for elemental and status attacks. " + 
						"However, the dual blades' sharpness tends to wear down fast."
			}
		/>
		<WeaponSection 
			key={"Hammer"}
			name={"Hammer"}
			src={"./images/Ham_icon.png"}
			link={"/hammer"}
			stats={[4,2,4,1,4]}
			text={"A blunt weapon made for hitting monsters in the face, knocking them out cold. " +
						"The hammer has good mobility and weighty, powerful attacks, letting you home in on your target to deliver stunning blows. " +
						"Charge attacks let you access different attacks while you move, and you can store your charge to boost your power " +
						"The hammer also has strong standing combos, making the hammer an accurate weapon on immobilized monsters. " +
						"Aiming attacks will be the greatest hurdle to learning this weapon, as its reach is poor."
			}
		/>




	</div>;

export default Weapons;