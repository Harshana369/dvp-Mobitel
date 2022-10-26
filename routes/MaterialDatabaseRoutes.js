const router = require("express").Router();
const Posts = require("../models/MaterialDatabase");

// ------------------------- Posting items data to the database  ---------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post("/materialProjectsDatabases/save/:id", async (req, res) => {
  console.log("ok");
  console.log(req.params.id);
  console.log(req.body);
  const objID = req.params.id;

  const artist = await Posts.updateOne(
    {
      _id: objID,
    },
    {
      $push: {
        properties: {
          id: req.body.id,
          ERP_Description: req.body.ERP_Description,
          Category: req.body.Category,
        },
      },
    }
  );

  if (artist) {
    res.status(200).send("Successful");
  } else {
    res.status(500).send("Not successful");
  }
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
router.put("/materialProjectsDatabases/update", async (req, res, next) => {
  // console.log(req.body.properties[0]._id);
  // Posts.updateOne(
  //   { _id: _id },
  //   { $set: { "properties.$[0].erpDescription": req.body.erpDescription} }
  // );
});

module.exports = router;
