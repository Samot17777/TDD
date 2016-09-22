const assert = require('assert');
const prepareErrorReport = require('../../lib/report/prepareErrorReport');

describe('partitionResultss', function () {
    it('should give error part of report', function () {
        const errorResults = prepareErrorReport([['dsada',204],['ABddBB', 404]]);

        assert.equal(errorResults,'Ticker symbols with error:\ndsada   204\nABddBB   404\n' );
    });
});