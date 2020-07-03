const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");
const plantRoutes = require("./plantController");
const graveyardRoutes = require("./graveyardController");
const genusRoutes = require("./genusController");
const speciesRoutes = require("./speciesController");
const wishlistRoutes = require("./usersController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/plants", plantRoutes);
router.use("/graveyard", graveyardRoutes);
router.use("/species", speciesRoutes);
router.use("/genus", genusRoutes);
router.use("/wishlist", wishlistRoutes);

// Export the router
module.exports = router;
