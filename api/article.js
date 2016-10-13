var router = require('express').Router();
var Article = require('../models/article.js');

router.delete('/:id', function(req, res, next) {
    Article
        .findByIdAndRemove(req.params.id)
        .execAsync()
        .then(x => res.json(x))
        .catch(next);
});

module.exports = router;
