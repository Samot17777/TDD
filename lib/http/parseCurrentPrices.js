const Either = require('data.either');

module.exports = function(responses) {
    return responses.map(parse);
};

function parse(response) {
    if(response.statusCode !== 200) {
        return Either.Left(response.statusCode);
    }

    const body = response.body;
    const firstDataLine = body.split('\n')[1];
    const price = firstDataLine.split(',')[1];

    return Either.Right(price);
}