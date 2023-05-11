const express = require("express");
const router = express.Router();

const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../../controller/controller");

router.route("/getdata").get(getAllTask);
router.route("/register", cors(corsOptions)).post(createTask);
router.route("/getdata/:id").get(getTask);
router.route("/update/:id").patch(updateTask);
router.route("/delete/:id").delete(deleteTask);

module.exports = router;
