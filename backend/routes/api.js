const express = require('express');
const router  = express.Router();
const activitiesRoutes = require("./activities");
const citiesRoutes = require("./cities");


module.exports = (activityService, cityService) => {

  // router.get("/activities", (req, res) => {
  //   return activitiesRoutes()
  // });

  // router.get("/cities", (req, res) => {
  //   console.log('in cities')
  //   return citiesRoutes
  // });

  router.use("/activities", activitiesRoutes(activityService));
  router.use("/cities", citiesRoutes(cityService));
  
  return router;
};
