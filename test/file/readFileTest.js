const assert = require('assert');
const readFile = require('../../lib/file/readFile');
const coMocha = require('co-mocha');
const td = require('testdouble');


describe ('read file', () => {
    it('[]integration test should get file content', function * () {
        const fs = require('fs');
        //given
        const read = readFile({fs});
        //when
        const result = yield read('./symbols.txt');
        //then  
        assert.equal(result, 'GOOG\r\nAAPL\r\nORCL\r\nMSFT\r\nINVALID');
    });

    it('[unit test] should get file content', function* () {
        //given
        const fs = {
            readFile: function (fileName, encoding, callback) {
                assert.equal(fileName, './symbols.txt');
                assert.equal(encoding, 'utf8');
                callback(null, 'content');
            }
        }
        const read = readFile({fs}); 
        //when
        const result = yield read('./symbols.txt');
        //then
        assert.equal(result, 'content');

    });
    it('[unit test with mocking library] should get file content', function* () {
        //given
        const fs = td.object();
        td.when(fs.readFile('./symbols.txt', 'utf8')).thenCallback(null, 'content');
        const read = readFile({fs}); 
        //when
        const result = yield read('./symbols.txt');
        //then
        assert.equal(result, 'content');

    });

    it('[]integration test should fail on nonexistant file', function * () {
        const fs = require('fs');
        const read = readFile({fs});
        try {
            yield read('./symbolsesesfahfsguafuigsfjasfgifiugiojsoghash.txt_invalid');
            throw 'should fail on nonexistant file';
        } catch (e){
            assert.equal(e, 'Cannot read file ./symbolsesesfahfsguafuigsfjasfgifiugiojsoghash.txt_invalid');
        }
        
    });
});