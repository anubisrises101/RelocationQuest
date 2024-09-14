const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/checkToken");
const moves = require("../controllers/moves");

// ============ Public Routes ============

// ============ Protected Routes ============
router.use(checkToken);

// All routes start with /api/moves

// GET /moves also the Show route
router.get("/", moves.movesIndex);

// POST /moves also the Create route
router.post("/", moves.newMove);

// PUT /moves/:id also the Update route
router.put("/:moveId", moves.updateMove);

module.exports = router;
