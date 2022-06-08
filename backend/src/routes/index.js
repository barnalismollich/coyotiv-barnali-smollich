const express = require('express')
const router = express.Router()
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Family Diary - a project by Barnali Smollich' })
})
router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', { title: 'bootstrap' })
})

//multer object creation
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/', upload.single('imageupload'), function (req, res) {
  res.send('File upload sucessfully.')
})
module.exports = router
