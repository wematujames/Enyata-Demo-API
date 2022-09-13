const config = require("config");
const { Sequelize } = require('sequelize');

const conn = new Sequelize(config.get("db.host"));

const connect = async () => {
    try {
        await conn.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.log('Connection could not be established.', error);
    }
}
module.exports = { conn, connect };
