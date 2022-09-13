const ErrorResponse = require("../utilities/ErrorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Incident = require("../models/Incidents");
const axios = require("axios");
const config = require("config");

//Route             // /api/v1/incidents/
//Method            // POST
//Auth              // None 
exports.createIncident = asyncHandler(async (req, res, next) => {

    const baseURL = "https://api.openweathermap.org/data/2.5/weather";

    const weather_res = await axios.get(baseURL, {
        params: {
            q: "Accra",
            appid: config.get("openweathermap.apiKey")
        }
    });
    
    // return res.send(weather_res.data)
    req.body.weather_report = weather_res.data;
    const newIncident = await Incident.create(req.body);

    return res.status(201).send({
        statusCode: 201,
        success: true, 
        data: newIncident
    });
});

//Route             // /api/v1/incidents/
//Method            // GET
//Auth              // None 
exports.getIncident = asyncHandler(async (req, res, next) => {
    const incident = await Incident.findOne({ where: { incident_id : req.params.id}});

    if (!incident) {
        return next(new ErrorResponse(
            404,
            "No incident found",
            "Invalid incident id provided ")
        )
    }
    return res.status(200).json({statusCode: 200, success: true, data: incident });
});

//Route             // /api/v1/incidents/
//Method            // GET
//Auth              // None 
exports.getIncidents = asyncHandler(async (req, res, next) => {
    const incidents = await Incident.findAll();
    return res.status(200).json({statusCode: 200, success: true, data: incidents });
});
