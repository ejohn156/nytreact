const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.find)
  .post(articlesController.create)
  

// Matches with "/api/articles/:id"
router.route("/:id")
.delete(articlesController.delete)

module.exports = router;