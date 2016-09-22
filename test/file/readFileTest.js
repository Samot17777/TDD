const assert = require('assert');
const readFile = require('../../lib/file/readFile');
const coMocha = require('co-mocha');

describe ('read file', () => {
    it('[]integration test should get file content', function * () {
        const read = readFile();

        const result = yield read('./symbols.txt');

        assert.equal(result, 'GOOG\r\nAAPL\r\nORCL\r\nMSFT\r\nINVALID');
    });
});