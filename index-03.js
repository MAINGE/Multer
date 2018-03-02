const express = require('express')

const app = express()

const multer = require('multer')

const storage = multer.diskStorage({

destination: (req, file, cb) => {

cb(null, 'uploads/')

},

filename: (req, file, cb) => {

cb(null, Date.now()+'-'+file.ogirinalname)

}

})

const upload = multer({ storage })
