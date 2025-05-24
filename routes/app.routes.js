const route = require('express').Router();
const appController = require("../controllers/app.controller")

route.get('/', appController.home);
route.get('/about', appController.about);
route.get('/services', appController.services);
route.get('/contact', appController.contact);

module.exports = route;