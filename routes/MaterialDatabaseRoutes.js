const router = require("express").Router();
const Posts = require("../models/MaterialDatabase");

// ------------------------- Posting items data to the database  ---------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post("/materialProjectsDatabases/save", (req, res) => {
  console.log("ok");
  let newPost = new Posts(req.body);

  newPost.save((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      //   success: "Project Details Added Successfully",
      success: posts,
    });
  });
});

// ------------------------- Get items data to the database  ---------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.get("/materialProjectsDatabases/getall", async (req, res, next) => {
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      success: posts,
    });
  });
});

// ------------------------- update items data to the database  ---------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

module.exports = router;
