const { Router } = require('express')
const controller = require('./controller')

const router = Router();


router.get("/", controller.getNewUsers)
router.get("/:id", controller.getNewUsersById)



module.exports = router;