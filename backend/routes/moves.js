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
router.put("/:movesId", moves.updateMove);

// DELETE /moves/:id also the Destroy route
router.delete("/:movesId", moves.deleteMove);

// GET /moves/:id also the Show route
router.get("/:movesId", moves.showMove);

// GET /moves/:id/edit also the Edit route
router.get("/:movesId/edit", moves.editMove);

module.exports = router;
