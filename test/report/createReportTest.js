const assert = require('assert');
const prepareReport = require('../../lib/report/createReport');

describe('prepare report', function () {
    it('should concatenate success and error results', function () {
        const partitionResults = function(data) {
            assert.equal(data, 'data');
            return ['success results', 'error results'];
        };

        const prepareSuccessReport = function(success) {
            assert.equal(success, 'success results');
            return 'success';
        };

        const prepareErrorReport = function(errors) {
            assert.equal(errors, 'error results');
            return 'error';
        };

        const result = prepareReport({partitionResults, prepareSuccessReport, prepareErrorReport})('data');

        assert.equal(result, 'successerror');
    });
});