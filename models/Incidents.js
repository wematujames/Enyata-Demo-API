const { DataTypes, Model } = require('sequelize');
const conn = require("../config/connectDB").conn;

class Incident extends Model { };
Incident.init({
    incident_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    incident_desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weather_report: {
        type: DataTypes.JSONB,
        allowNull: false
    }
}, {
    // Model options
    sequelize: conn, // Connection instance
    modelName: 'Incident',
    tableName: 'Incident', 
    timestamps: true,
    createdAt: "date",
    updatedAt: "updated"
});

module.exports = Incident;