const db = require("../models");
const User =db.user;
const Ulasan = db.ulasan;
const Reservation = db.reservation;

  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  