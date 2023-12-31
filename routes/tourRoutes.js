// CORE PACKAGE/MODULE
const express = require("express");
const tourController = require("../controllers/toursController.js");

const router = express.Router();

// router.param("id", tourController.checkId);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(
    tourController.checkBody,
    tourController.createTour
  );

router
  .route("/model")
  .get(tourController.getAllToursModels)
  .post(tourController.createTourModel);

router
  .route("/model/:id")
  .get(tourController.getTourByIdModel)
  .patch(tourController.editTourModels)
  .delete(tourController.removeTourModel);

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.editTour)
  .delete(tourController.removeTour);

module.exports = router;
