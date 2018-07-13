import { TweenMax } from 'gsap';

export default {

	enterRight(target, cb, select) {
		let val = "";
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
				break;
			case 4:
				val = "420px";
				break;
			case 5:
				val = "500px";
				break;
			case 6:
				val = "580px";
				break;
			default:
				val = "180px";
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