module.exports = (sequelize, DataTypes) => {
  return sequelize.define('vaccinations', {
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