const express = require("express");
const router = express.Router();
const CelebModel = require("../models/Celebrity.model");

// GET - Create a Celebrity
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs", {
    css: ['style']
  });
});

// POST - Create a Celebrity suite
router.post("/create", async (req, res, next) => {
  const { name, occupation, catchphrase } = req.body;
  CelebModel.create(req.body)
    .then((newCeleb) => {
      console.log("NewCeleb: ", newCeleb);
      res.redirect("/celebrities");
    })
    .catch((error) => console.log(error));
});

// GET -  All Celebrities
router.get("/", async (req, res, next) => {
  CelebModel.find()
    .then((dbRes) => {
      console.log("Db response: ", dbRes);
      res.render("celebrities/celebrities.hbs", {
        celebrities: dbRes,
        css: ["celebrities", "style"],
      });
    })
    .catch((e) => comsole.error(e));
});

module.exports = router;
