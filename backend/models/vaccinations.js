module.exports = (sequelize, DataTypes) => {
    return sequelize.define('vaccination', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },  
        gender: DataTypes.STRING,
        sourceBottle: DataTypes.UUID,
        injected: DataTypes.DATE
    },  {
        timestamps: false
    })
}

/*
{
  "vaccination-id": "universal identifier of the vaccination",
  "gender": "male|female|nonbinary",
  "sourceBottle": "universal identifier of the bottle",
  "injected": "Datetime"
}*/