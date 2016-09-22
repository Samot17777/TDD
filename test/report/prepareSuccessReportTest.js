const assert = require('assert');
const prepareSuccessReport = require('../../lib/report/prepareSuccessReport');

describe('partitionResultss', function () {
    it('should give succes part of report', function () {
        const successResults = prepareSuccessReport([['BBBB',20],['ABBB', 10]]);

        assert.equal(successResults,'Prices for ticker symbols:\nBBBB   20\nABBB   10\n' );
    });
});