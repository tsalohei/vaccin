module.exports = (sequelize, DataTypes) => {
    return sequelize.define('orders', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
            //,autoIncrement: false
        },  
        healthCareDistrict: DataTypes.STRING, 
        orderNumber: DataTypes.INTEGER,
        responsiblePerson: DataTypes.STRING, 
        injections: DataTypes.INTEGER,
        arrived: DataTypes.DATE,
        vaccine: DataTypes.STRING,
        },  
        {
            timestamps: false
        })
}