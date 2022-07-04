const {Router}  = require('express')
const pdfController = require('../controllers/pdfController')

const router = new Router()

// router.get('/createPdf', pdfController.pdf)
router.get('/generatepdf', pdfController.createPdf)

module.exports = router