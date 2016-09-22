const Either = require('data.either');
const partition = require('lodash.partition');

module.exports = function(data) {
    const results = partition(data, pair => pair[1].isRight);
    const successes = results[0].map(unwrap).sort((pairA, pairB) => { 
        return Number(pairA[1]) < Number(pairB[1]);
    });
    const errors = results[1].map(unwrap);

    return [successes, errors]
};

function unwrap(pair) {
    return [pair[0], pair[1].value];
}