const {Router} = require('express')
const routes = require('./routes/all')

let router = Router()

router.use('/all', routes)
router.get('/', (req, res) => {
    res.json({
        route: "Api Version One",
        time: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
        timestamp: Date.now()
    })
})

router.get('/pug', (req, res) => {
    res.render('test', {title: 'Just Testing here', another: 'Another'})
})

module.exports = router