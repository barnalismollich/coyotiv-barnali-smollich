const express = require('express')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname)
  },
})

const upload = multer({ storage: storage })

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Family Diary - a project by Barnali Smollich' })
  console.log('index rendered')
})
router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', { title: 'bootstrap' })
})
router.post('/upload', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log('file uploaded')
  res.send('Datei wurde erfolgreich hochgeladen')
})

module.exports = router
