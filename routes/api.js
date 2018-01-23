const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
// const path = require("path");

// API routes
router.get("/api/weapon", (req, res) => {
	db.Movelist.find()
		.then(dbModel => res.json(dbModel))
		.catch(err => console.log(err));
})

module.exports = router;