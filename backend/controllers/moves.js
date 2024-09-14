const express = require("express");
const Moving = require("../models/movingSchema");
const User = require("../models/user");

// All routes start with /api/moves

// GET /moves also the Show route
async function movesIndex(req, res) {
  try {
    const moves = await Moving.find({});
    res.status(200).json(moves[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

// POST /moves also the Create route
async function newMove(req, res) {
  try {
    req.body.userId = req.user._id;
    const newMoves = await Moving.create(req.body);
    res.status(201).json(newMoves);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

// PUT /moves/:id also the Update route
async function updateMove(req, res) {
  try {
    const move = await Moving.findById(req.params.moveId).populate("userId");
    if (!move.userId.equals(req.user._id)) {
      return res.status(403).send("You're not allowed to do that!");
    }
    const updatedMove = await Moving.findByIdAndUpdate(
      req.params.moveId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedMove);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  movesIndex,
  newMove,
  updateMove,
};
