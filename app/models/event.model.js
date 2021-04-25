module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
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

