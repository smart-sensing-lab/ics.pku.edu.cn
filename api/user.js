var router = require('express').Router();
var User = require('../models/user.js');

router.delete('/:id', function(req, res, next) {
    User
        .findByIdAndRemove(req.params.id)
        .execAsync()
        .then(x => res.json(x))
        .catch(next);
});

module.exports = router;
