module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define("Reservation", {
      name: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.BIGINT
      },
      serviceType: {
        type: Sequelize.STRING
      },
      datetime: {
        type: Sequelize.DATE
      }
    });
  
    return Reservation;
  };