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