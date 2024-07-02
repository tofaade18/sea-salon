const db = require("../models");
const Reservation = db.reservation;
const Ulasan = db.ulasan;
const user = db.user

const Op = db.Sequelize.Op;


exports.create = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const reservation = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      serviceType: req.body.serviceType,
      datetime: req.body.datetime,
      userId: req.body.userId
    };
    const data = await Reservation.create(reservation);
    return res.status(201).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating."
    });
  }
};


exports.findAll = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Reservation.findOne({
      include: [
        {
          model: user,
          as: 'user',
          attributes: [ "id",
          "createdAt",
          "updatedAt"]
        }
      ],
      where: { id: id }
    });

    if (!data) {
      return res.status(404).send({
        message: `No reviews found for user with id=${id}`
      });
    }
    const result = {
      ...data.get(), 
    };

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data."
    });
  }
};
exports.findAllreviews = async (req, res) => {
  try {
    const data = await Reservation.findAll({
      include: [
        {
          model: user,
          as: 'user',
          attributes: ["id","createdAt","updatedAt"]
        }
      ]
    });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving data."
    });
  }
};
exports.update = (req, res) => {
  const id = req.params.id;
  Reservation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Data was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
};
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    const num = await Reservation.destroy({
      where: { id: id }
    });

    if (num == 1) {
      res.status(200).send({
        message: "Data was deleted successfully!"
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Data with id=${id}`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Data with id" 
    });
  }
};