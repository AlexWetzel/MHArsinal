const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movelistSchema = new Schema({
	weapon: { type: String, required: true},
	moveID: { type: String, required: true},
	name: { type: String, required: true},
	description: { type: String},
	cancels: [{
		moveID: {type: String},
		input: {type: String}
	}]
});

const Movelist = mongoose.model("Movelist", movelistSchema);

module.exports = Movelist;