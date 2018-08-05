const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.find)
  .post(articlesController.create)
  .delete(articlesController.remove)

// Matches with "/api/articles/:id"


module.exports = router;