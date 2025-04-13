const express = require("express");
const {
  index,
  create,
  store,
  edit,
  update,
  deleteEmployee,
} = require("../controllers/controller");
const { upload } = require("../middleware/fileUploadMiddleware");

const router = express.Router();

router.get("/", index);
router.get("/create", create);
router.post("/store", upload.single("image"), store);
router.get("/edit/:id", edit);

router.post("/update/:id", upload.single("image"), update);

router.post("/delete/:id", deleteEmployee);

module.exports = router;
