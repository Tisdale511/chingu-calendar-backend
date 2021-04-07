module.exports = (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      }
    },
    { sequelize,
      modelName: 'event',
      timestamps: false
    }
  );

    
  
  return Event
};