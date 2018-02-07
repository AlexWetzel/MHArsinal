import { TweenMax, Elastic } from 'gsap';

// const duration = 0.5;

export default {
	// show(target, cb) {
	// 	return TweenMax
	// 		.from(target, 0.5, {
	// 			opacity: 0,
	// 			height: 0,
	// 			onComplete() {
	// 				cb();
	// 			},
	// 			ease: Elastic.easeOut.config(0.25, 1),
	// 		});
	// },
	// hide(target, cb) {
	// 	return TweenMax
	// 		.to(target, 0.5, {
	// 			opacity: 0,
	// 			height: 0,
	// 			onComplete() {
	// 				cb();
	// 			},
	// 			ease: Elastic.easeIn.config(0.25, 1),
	// 		});
	// },
	enterRight(target, cb, select) {
		let val = "180px";
		switch(select) {
			case 0:
				val = "100px";
				break;
			case 1:
				val = "180px";
				break;
			case 2:
				val = "260px";
				break;
			case 3:
				val = "340px";
			case 4:
				val = "420px";
			case 5:
				val = "500px";
			case 6:
				val = "580px";
				break;

		}


		return TweenMax
			.from(target, 0.5, {
				left: "130%",
				top: val,
				// width: "600px",
				onComplete() {
					cb();
				},
				
			});
	},
	leaveLeft(target, cb) {
		return TweenMax
			.to(target, 0.5, {
				opacity: 0,
				height: 0,
				left: "100px",
				onComplete() {
					cb();
				},

			});
	},
};