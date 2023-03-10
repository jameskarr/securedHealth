const express = require("express")
const router = express.Router()
const upload = require("../middleware/multer")
const licenseController = require("../controllers/license")
const { ensureAuth } = require("../middleware/auth")

router.get("/", ensureAuth, licenseController.getLicensePage)
router.post("/createLicense", upload.single("file"), licenseController.createLicense)
router.delete("/deleteLicense/:id", ensureAuth, licenseController.deleteLicense)

module.exports = router