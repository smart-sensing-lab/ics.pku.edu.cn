var _ = require('lodash');
var mongoose = require('mongoose');

var FileSchema = mongoose.Schema({
    filename: String,
    originalname: String,
    path: String,
    mimetype: String,
    size: String,
    createdTime: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: {
        virtuals: true
    }
});

FileSchema.virtual('url').get(function() {
    return '/upload/' + this.filename;
});

// Simditor Support
//
FileSchema.virtual('success').get(function() {
    return true;
});
FileSchema.virtual('file_path').get(function() {
    return '/upload/' + this.filename;
});

module.exports = mongoose.model('File', FileSchema);
