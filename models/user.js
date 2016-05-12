var _ = require('lodash');
var users = {}, 
    count = 0,
    defaultUser = {
        id: null,
        name: 'alice',
        description: 'Vestibulum in pede adipiscing mi dapibus condimentum. Etiam felis risus, condimentum in, malesuada eget, pretium ut, sapien.  Suspendisse placerat lectus.' 
    };

const names = [ 'Alice', 'Bob', 'Charlie', 'David' ];
const descriptions = [
    'Tincidunt. Proin sagittis. Curabitur auctor metus non mauris. Nunc',
    'condimentum nisl non augue. Donec leo urna.  Ornare non, arcu. Maecenas',
    'condimentum sodales odio. Sed eu orci.  Nullam adipiscing eros sit amet',
    'ante. Vestibulum.  Imperdiet neque mauris aliquam nisl. Suspendisse blandit',
    'quam quis felis. Praesent turpis nunc, vehicula in, bibendum.  Curabitur',
    'consectetuer arcu. Etiam placerat est eget odio. Nulla facilisi. Nulla',
    'facilisi. Mauris non neque. Suspendisse.  Quam, et dapibus mi enim sit amet',
    'risus. Nulla sollicitudin eros sit amet diam. Aliquam ante.  Mattis odio',
    'vitae tortor. Fusce iaculis. Aliquam rhoncus, diam quis tincidunt'];

function random(obj) {
    return {
        name: _.sample(names),
        description: _.sample(descriptions),
        age: _.random(10, 30),
        avatar: '/img/favicon.png'
    };
}

exports.random = function(n){
    return n ? _.times(random) : random();
};
