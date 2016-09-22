const assert = require('assert');
const partitionResults = require('../../lib/report/partitionResults');
const Either = require('data.either');

describe('partitionResultss', function () {
    it('should split successes and errors', function () {
        const results = partitionResults([
            ['A',Either.Right(10)],
            ['B', Either.Right(20)], 
            ['C', Either.Left('error')]]);

        assert.deepEqual(results, [[['B',20],['A', 10]], [['C', 'error']]]);
    });
});