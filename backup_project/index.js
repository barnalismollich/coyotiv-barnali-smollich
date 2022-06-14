const express = require('express')
const router = express.Router()

//
//    Use multer for uploading documents.
//
const multer = require('multer')

//
//    For now, store them in the backend container.
//
//    It will create the folder you define here auto-magically.
//
const upload = multer({ dest: 'where_i_will_store_my_files/' })

//
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

//
//    Some more examples
//
router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

router.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

module.exports = router
