'use strict';

var IndexModel = require('../models/index');

var MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
var SUPPORTED_IMG_MIME_TYPES = new RegExp('image\/(?=jpeg|pjpeg|gif|png)'); // JPG, GIF, PNG
var SUPPORTED_FILE_MIME_TYPES = new RegExp(SUPPORTED_IMG_MIME_TYPES.source + '|application\/pdf|pplication\/msword|application\/vnd.openxmlformats-officedocument.wordprocessingml.document'); // ... + PDF, DOC, DOCX


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {


        res.render('index', model);


    });

    router.post('/upload', function (req, res) {
        var files = req.files;
        var totalFileSize = 0;

        var images = [];

        for (var obj in files) {
            if (files.hasOwnProperty(obj)) {
                var file = files[obj];
                // console.log('file.name:', file.name);
                // console.log('file.size:', file.size);
                // console.log('file.type:', file.type);
                // console.log('file.path:', file.path);
                totalFileSize += file.size;

                if (!SUPPORTED_FILE_MIME_TYPES.test(file.type)) {
                    // Invalid file detected
                    return res.status(422).json({});
                }

                if (SUPPORTED_IMG_MIME_TYPES.test(file.type)) {
                    images.push(file);
                }
            }
        }

        if (totalFileSize === 0) {
            // No files detected
            return res.status(500).json({});
        } else if (totalFileSize > MAX_FILE_SIZE) {
            // Total file sizes above the limit
            return res.status(413).json({});
        }

        return res.status(200).json({});
    });

};
