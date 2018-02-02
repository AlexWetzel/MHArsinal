import { TweenMax, Elastic } from 'gsap';

export default {
	// show(target, cb) {
	// 	return TweenMax
	// 		.from(target, duration, {
	// 			opacity: 0,
	// 			height: 0,
	// 			onComplete() {
	// 				cb();
	// 			},
	// 		});
	// },
	hide(target, cb) {
		return TweenMax
			.to(target, 0.2, {
				opacity: 0,
				height: 0,
				onComplete() {
					cb();
				},
			});
	},
	enterRight(target, cb) {
		return TweenMax
			.from(target, 0.5, {
				// width: "600px",
				left: "150%",
				onComplete() {
					cb();
				},
				
			});
	}
};