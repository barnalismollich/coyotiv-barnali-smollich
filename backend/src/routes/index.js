const express = require('express')
const fs = require('fs')
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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  // filename: function (req, file, cb) {
  //   cb(null, req.body.name + '.pdf')
  // },
})
//
//    For now, store them in the backend container. It will create the folder you define here auto-magically.
// It just does not show the document in the frontend.
// const upload = multer({ dest: 'upload/' })
const upload = multer({ storage: storage })

//    Render/Display the page that will allow us to do an upload
//
//    This will be the upload.pug file in 'views'
//
router.get('/upload', function (req, res, next) {
  res.render('upload', { title: 'NEEP?' })
})

router.get('/download', function (req, res, next) {
  res.download('/app/upload/' + req.query.firstName + '-' + req.query.name + '.pdf')
})

router.get('/exists', function (req, res, next) {
  console.log('check if file exists')
  fs.access('/app/upload/' + req.query.firstName + '-' + req.query.name + '.pdf', fs.constants.F_OK, err => {
    if (err) res.json({ exists: false })
    else res.json({ exists: true })
  })
})

//
//    The name, 'anna_is_sleepy' in this case, HAS to match the one in the
//    pug file!
//
router.post('/upload', upload.single('file'), function (req, res) {
  // delete old file if it exists
  fs.unlink('/app/upload/' + req.body.user + '-' + req.body.name + '.pdf', function (err) {
    if (err && err.code != 'ENOENT') {
      console.log(err)
    }
  })
  // rename uploaded file
  fs.rename('/app/' + req.file.path, '/app/upload/' + req.body.user + '-' + req.body.name + '.pdf', function (err) {
    if (err) console.log(err)
  })

  console.log('Did I get here?')

  console.log('File information:')
  console.log(req.file)

  console.log('Anything on the body?')
  console.log(req.body)

  // and back to upload page
  res.render('upload', {
    title: 'Upload Page',
  })

  // res.send('File upload sucessfully.').status(200)
})

module.exports = router
