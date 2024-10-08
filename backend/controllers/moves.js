const express = require("express");
const Moving = require("../models/movingSchema");
const User = require("../models/user");

// All routes start with /api/moves

// GET /moves also the Show route
async function movesIndex(req, res) {
  try {
    const moves = await Moving.find({ userId: req.user._id });
    res.status(200).json(moves);
  } catch (error) {
    res.status(500).json(error);
  }
}

// GET /moves/:id also the Show route
async function showMove(req, res) {
  try {
    const move = await Moving.findById(req.params.movesId);
    res.status(200).json(move);
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
    res.status(500).json(error);

  }
}

// PUT /moves/:id also the Update route
async function updateMove(req, res) {
  console.log('put', req.body)
  try {
    // const move = await Moving.findById(req.params.moveId).populate("userId");
    // if (!move.userId.equals(req.user._id)) {
    //   return res.status(403).send("You're not allowed to do that!");
    // }
    const updatedMove = await Moving.findByIdAndUpdate(
      req.params.movesId,
      req.body,
      { new: true }
    );
    console.log('updatedMove', updatedMove);
    res.status(200).json(updatedMove);
  } catch (error) {
    res.status(500).json(error);
  }
}

// DELETE /moves/:id also the Destroy route
const deleteMove = async (req, res) => {
  try {
    const { movesId } = req.params;
    const deletedMove = await Moving.findByIdAndDelete(movesId);
    if (!deletedMove) {
      return res.status(404).json({ message: 'Move not found' });
    }
    res.status(200).json({ message: 'Move deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET /moves/:id/edit also the Edit route
async function editMove(req, res) {
  try {
    const move = await Moving.findById(req.params.moveId);
    res.status(200).json(move);
  } catch (error) {
    res.status(500).json(error);
  }
}



module.exports = {
  editMove,
  showMove,
  movesIndex,
  newMove,
  updateMove,
  deleteMove,
};


