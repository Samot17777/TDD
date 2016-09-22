'use strict';
const fetchSymbols = require('../lib/fetchSymbols');
const assert = require('assert');

describe ('fetchSymbols e2e', () => {
    it('should pass ? ', (done) => {
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
        const symbolPromise = fetch('plik');
        //then
        symbolPromise.then(symbols => {
            assert.deepEqual(symbols, ['A', 'B']);
            expectedAssertionCount++;
            assert.equal(expectedAssertionCount, 3, 'expected number of assertions');
            done();
        }).catch(done);
    });
});