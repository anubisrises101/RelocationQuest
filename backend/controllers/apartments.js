const express = require("express");
const Apartments = require("../models/apartmentSchema");
const User = require("../models/user");

// All routes start with /api/apartments

// GET /apartments also the Show route
async function apartmentsIndex(req, res) {
  try {
    const apartments = await Apartments.find({ userId: req.user._id });
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json(error);
  }
}

// GET /apartments/:id also the Show route
async function showApartment(req, res) {
  try {
    const apartment = await Apartments.findById(req.params.apartmentsId);
    res.status(200).json(apartment);
  } catch (error) {
    res.status(500).json(error);
  }
}

// POST /apartments also the Create route
async function newApartment(req, res) {
  try {
    req.body.userId = req.user._id;
    const newApartments = await Apartments.create(req.body);
    res.status(201).json(newApartments);
  } catch (error) {
    console.error('Error creating new apartment:', error); 

  }
}

// PUT /apartments/:id also the Update route
async function updateApartment(req, res) {
  console.log('put', req.body)
  try {
    const updatedApartment = await Apartments.findByIdAndUpdate(
      req.params.apartmentsId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedApartment);
  } catch (error) {
    res.status(500).json(error);
  }
}

// DELETE /apartments/:id also the Destroy route
const deleteApartment = async (req, res) => {
  try {
    const { apartmentsId } = req.params;
    const deletedApartment = await Apartments.findByIdAndDelete(apartmentsId);
    if (!deletedApartment) {
      return res.status(404).json({ message: 'Move not found' });
    }
    res.status(200).json({ message: 'Move deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// GET /apartments/:id/edit also the Edit route
async function editApartment(req, res) {
  try {
    const apartment = await Apartments.findById(req.params.apartmentId);
    res.status(200).json(apartment);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  editApartment,
  showApartment,
  apartmentsIndex,
  newApartment,
  updateApartment,
  deleteApartment,
};