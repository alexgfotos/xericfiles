const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * Post - Read All
 */
router.get("/", function (req, res) {
    db.Plant.findAll()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


router.get("/:id",  function (req, res) {
    db.Plant.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Post - Create
 * Notice how we are also taking in the User Id! Important!
 */
router.post("/", isAuthenticated,  function (req, res) {
    if(req.user === null || req.user.id === null){
        res.status(401).json("NOT AUTHORIZED");
    }
    db.Plant.create({
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Post - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.Plant.update(req.body, { where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * Post - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.Plant.destroy({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Defining methods for the plantController
module.exports = router;
