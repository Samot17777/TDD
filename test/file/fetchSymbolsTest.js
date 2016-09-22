const fetchSymbols = require('../../lib/file/fetchSymbols');
const assert = require('assert');
const td = require('testdouble');

describe ('fetchSymbols e2e', () => {

    if('should use biblioteka test double', function * () {
        //given
        const readFile = td.function('readFile');
        td.when(readFile('someFile')).thenReturn(Promise.resolve('plik'));

        const parseSymbols = td.function('parseSymbols');
        td.when(parseSymbols('A,B')).thenReturn(['A', 'B']);

        const fetch = fetchSymbols({ readFile, parseSymbols});
        //when 
        const symbols = yield fetch('plik');

        //then 

        td.verify(readFile('plik'));
        td.verify(parseSymbols('A,B'));
        assert.deepEqual(symbols, ['A', 'B']);
    });

    it('should pass ? ',   function * () {
        //given
        let expectedAssertionCount = 0;
        
        const readFile =  (fileName) => {
            expectedAssertionCount++;
            assert.equal(fileName,'plik');
            return Promise.resolve('A,B');
        };
        const parseSymbols =  (content) => {
            expectedAssertionCount++;
            assert.equal(content,'A,B');
            return ['A', 'B'];
        };

        const fetch = fetchSymbols({ readFile, parseSymbols});
        //when 
        const symbols = yield fetch('plik');

        //then
        assert.deepEqual(symbols, ['A', 'B']);
        expectedAssertionCount++;
        assert.equal(expectedAssertionCount, 3, 'expected number of assertions');
    });


});
