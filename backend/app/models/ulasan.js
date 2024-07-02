module.exports = (sequelize, Sequelize) => {
    const Ulasan = sequelize.define("Ulasan", {
      name: {
        type: Sequelize.STRING
      },
      ulasan: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      }
    });
  
    return Ulasan;
  };