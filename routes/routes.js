const express = require("express");
const router = express.Router();
const userController = require("../api/controllers/notifications");
router.post("/sendGift", userController.sendGift);
router.post("/sendTease", userController.sendTease);
router.post("/sendEvent", userController.notifyEvent);
module.exports = router;
