const router = require('express').Router();
const File = require('../models/file.js');
const multer = require('multer');
const path = require('path');

const debug = require('debug')('ics:upload');

var storage = multer.diskStorage({
    destination: (req, file, cb) =>
        cb(null, path.resolve(__dirname, '../public/upload')),
    filename: function(req, file, cb) {
        var ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});
var upload = multer({
    storage: storage
});

router.post('/', upload.single('file'), function(req, res, next) {//single写文件,是一个函数

    var file = req.file;
    if (!file) return res.status(400).end();

    File
        .createAsync(file)
        .then(f => res.status(201).json(f))
        .catch(next);
});

router.delete('/:id', function(req, res, next) {
    //debug(req.param('id'));
    File
        .findByIdAndRemove(req.params.id)
        .execAsync()
        .then(x => res.json(x))
        .catch(next);
});

module.exports = router;
