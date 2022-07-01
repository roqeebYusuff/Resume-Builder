const {Router} = require('express')

let router = Router()

router.get('/', (req, res) => {
    res.json({
        route: "Api Version One",
        timestamp: Date.now()
    })
})

module.exports = router