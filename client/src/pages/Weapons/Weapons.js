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
						"Charge attacks let you access different attacks while you move, and you can store your charge to boost your power. " +
						"The hammer also has strong standing combos, making the hammer an accurate weapon on immobilized monsters. " +
						"Aiming attacks will be the greatest hurdle to learning this weapon, as its reach is poor."
			}
		/>
		<WeaponSection 
			key={"Hunting Horn"}
			name={"Hunting Horn"}
			src={"./images/HH_icon.png"}
			link={"/huntinghorn"}
			stats={[3,2,5,1,5]}
			text={"An instrument of music as well as carnage. " +
						"The hunting horn's different attacks each play a note. " +
						"When the right notes are played in order, you can recite the song, granting status boosts to your party. " +
						"Naturally, this weapon is extremely desireable in multiplayer hunts. " +
						"While its overall damage is lackluster, its mmobility, reach, and ability to KO monsters make this weapon easy to use."
			}
		/>
		<WeaponSection 
			key={"Lance"}
			name={"Lance"}
			src={"./images/Lan_icon.png"}
			link={"/lance"}
			stats={[3,3,2,5,2]}
			text={"A defense-oriented weapon with slow movement and fast attacks. " +
						"The lance was made for relentlessly targeting the monster's weak spot while using the shield to stay safe. " +
						"Capable of guard dashing, counter thrusts, and strong omnidirectional guards, the lance boasts more defensive techniqes than any other weapon. " +
						"The lance's dash attack allows it to close long gaps and end with a powerful thrust. " +
						"However, the lance has trouble moving away from attacks when guarding isn't an option."
			}
		/>
		<WeaponSection 
			key={"Gunlance"}
			name={"Gunlance"}
			src={"./images/GL_icon.png"}
			link={"/gunlance"}
			stats={[4,3,1,3,1]}
			text={"An offense-oriented lance with a wide variety of attack options. " +
						"The gunlance not only has fast thrusts and powerful swings, but it can also fire heavy artillery from its barrel. " +
						"From hide-piercing shells, the precise wyrmstake, and the explosive wyvern's fire, the gunlance has options for any situation " +
						"While its shield is as strong as the lances, this weapon lacks any defensive moves, so it's often better to evade to position yourself. " +
						"The gunlance's slow movement and complex combos make this a difficult weapon to learn."
			}
		/>
		<WeaponSection 
			key={"Switch Axe"}
			name={"Switch Axe"}
			src={"./images/SA_icon.png"}
			link={"/switchaxe"}
			stats={[4,4,2,1,2]}
			text={"A long-reaching axe that morphs into a swift, heavy sword " +
						"In axe mode you gradually build phial energy to be used in sword mode. " +
						"Sword mode attacks are powerful, and get stronger as you keep attacking and achieve phial awakening. " +
						"In this state, you can thrust your sword into a monster, grapple onto them, and unleash an explosive finish. " +
						"Switchaxe users rely on evading and positioning to defend themselves."
			}
		/>
		<WeaponSection 
			key={"Charge Blade"}
			name={"Charge Blade"}
			src={"./images/CB_icon.png"}
			link={"/chargeblade"}
			stats={[5,3,4,4,4]}
			text={"A heavy sword and shield that combine into a mighty axe. " +
						"Sword mode can charge phial energy, which can be used to unleash powerful axe attacks and to strengthen itself further. " +
					 	"Sword mode is fairly mobile, and can slide in any direction to reposition easily. " +
						"Furthermore, you can guard during certain attacks, which let you immediately use your strongest move to punish monsters. " +
						"Axe mode is strong, yet slow, and should be used carefully. " +
						"The charge blade is indeed strong, but can be difficult to master."
			}
		/>
		<WeaponSection 
			key={"Insect Glaive"}
			name={"Insect Glaive"}
			src={"./images/IG_icon.png"}
			link={"/insectglaive"}
			stats={[2,5,5,1,4]}
			text={"A long polearm paired with a kinsect companion" +
						"The glaive is not only capable of swift attacks, but it can also be used to vault into the air, attacking mosters from above. " +
					 	"The kinsect can be used to attack monsters, leaving status inflicting dust, and retrieve extracts. " +
						"These extracts can be used to increase the number of hits you deal, boost your movement speed, and improve your defense. " +
						"While this weapon requires a certain amount of upkeep, its maneuverability makes it an attractive choice for new hunters."
			}
		/>




	</div>;

export default Weapons;