const express = require('express')
const router = express.Router()
/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Family Diary',
  })
})
router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', { title: 'bootstrap' })
})

//
//    Use multer for uploading documents.
//
const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },
// })
//
//    For now, store them in the backend container.
//
//    It will create the folder you define here auto-magically.
//
const upload = multer({ dest: 'where_i_will_store_my_files/' })

//    Render/Display the page that will allow us to do an upload
//
//    This will be the upload.pug file in 'views'
//
router.get('/upload', function (req, res, next) {
  res.render('upload', { title: 'NEEP?' })
})

//
//    The name, 'anna_is_sleepy' in this case, HAS to match the one in the
//    pug file!
//
router.post('/upload', upload.single('anna_is_sleepy'), function (req, res) {
  console.log('Did I get here?')

  console.log('File information:')
  console.log(req.file)

  console.log('Anything on the body?')
  console.log(req.body)

  // and back to upload page
  res.render('upload', { title: 'WOT?' })

  // res.send('File upload sucessfully.').status(200)
})

module.exports = router
