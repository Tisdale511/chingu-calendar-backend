module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      // startTime: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      // endTime: {
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }
  );

  // const test = Event.create(
  //   {
  //     name: 'event name test',
  //     description: 'this is working',
  //     startTime: '3',
  //     endTime: '4'
  //   }
  // )

    
  
  return Event
};