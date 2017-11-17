exports.url = '/training';
exports.get = function(req, done, fail) {
    done({
        cooperationActive:'active',
        cooperation_trainingActive:'active'
    });
};