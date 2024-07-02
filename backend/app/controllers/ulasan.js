const { name } = require("ejs");
const db = require("../models");
const Ulasan = db.ulasan;
const user = db.user
const Op = db.Sequelize.Op;
const path = require("path")

exports.create = async (req, res) => {
  try {
    if (!req.body.ulasan) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    console.log(req.body.ulasan)

    const ulasan = {
      name: req.body.name,
      ulasan: req.body.ulasan,
      rating: req.body.rating,
      userId: req.body.userId
    };

    console.log(ulasan)

    const data = await Ulasan.create(ulasan);

    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating."
    });
  }
};
exports.findAll = async (req, res) => {
  try {
    console.log(Ulasan)
    const id = req.params.id;
    const data = await Ulasan.findOne({
      include: [
        {
          model: user,
          as: 'ulas',
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
    const data = await Ulasan.findAll({
      include: [
        {
          model: user,
          as: 'ulas',
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

exports.update = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!req.body.ulasan) {
      return res.status(400).send({
        message: "Request body can not be empty!",
      });
    }

    const { name, ulasan, rating } = req.body;
    console.log(req.body);
    const updateData = { name, ulasan, rating };
    const [num] = await Ulasan.update(updateData, {
      where: { userId },
    });

    if (num === 1) {
      res.status(200).send({
        message: "Data was updated successfully.",
      });
    } else {
      res.status(404).send({
        message: `Cannot update Data with layanansId=${layanansId} and userId=${userId}. Data not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating data.",
    });
  }
}; 




exports.deleteul = async (req, res) => {
  try {
    const ulasanId = req.params.id;

    const num = await Ulasan.destroy({
      where: { userId: userId, ulasanId: ulasanId }
    });


    if (num == 1) {
      res.status(200).send({
        message: "Data was deleted successfully!"
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Data`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Data layanan"
    });
  }
};