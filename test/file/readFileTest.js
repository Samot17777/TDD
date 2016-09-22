const assert = require('assert');
const readFile = require('../../lib/file/readFile');
const coMocha = require('co-mocha');

describe ('read file', () => {
    it('[]integration test should get file content', function * () {
        const read = readFile();

        const result = yield read('./symbols.txt');

        assert.equal(result, 'GOOG\r\nAAPL\r\nORCL\r\nMSFT\r\nINVALID');
    });

    it('[]integration test should fail on nonexistant file', function * () {
        const read = readFile();
        try {
            yield read('./symbolsesesfahfsguafuigsfjasfgifiugiojsoghash.txt_invalid');
            throw 'should fail on nonexistant file';
        } catch (e){
            assert.equal(e, 'Cannot read file ./symbolsesesfahfsguafuigsfjasfgifiugiojsoghash.txt_invalid');
        }
        
    });
});