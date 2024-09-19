const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/checkToken");
const apartments = require("../controllers/apartments");

// ============ Public Routes ============

// ============ Protected Routes ============
router.use(checkToken);

// All routes start with /api/apartments

// GET /apartments also the Show route
router.get("/", apartments.apartmentsIndex);

// POST /apartments also the Create route
router.post("/", apartments.newApartment);

// PUT /apartments/:id also the Update route
router.put("/:apartmentsId", apartments.updateApartment);

// DELETE /apartments/:id also the Destroy route
router.delete("/:apartmentsId", apartments.deleteApartment);

// GET /apartments/:id also the Show route
router.get("/:apartmentsId", apartments.showApartment);

// GET /apartments/:id/edit also the Edit route
router.get("/:apartmentsId/edit", apartments.editApartment);

module.exports = router;
