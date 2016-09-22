'use strict';

const stockfetch = require('../lib/stockfetch');
const assert = require('assert');
describe('stockfetch e2e', () => {
    it('happy path', function* () {
        //given

        let expectedAssertionCount = 0;

        const fetchSymbols = function (fileName) {
            expectedAssertionCount++;
            assert.equal(fileName, 'someFile');
            return Promise.resolve(['A', 'B']);
        };
        const fetchPrices = function (symbols) {
            expectedAssertionCount++;
            assert.deepEqual(symbols, ['A', 'B']);
            return Promise.resolve([['A', 10], ['B', 20]]);
        };

        const prepareReport = function (symbolsAndPrices) {
            expectedAssertionCount++;
            assert.deepEqual(symbolsAndPrices, [['A', 10], ['B', 20]]);
            return 'report';
        };


        const fetch = stockfetch({ fetchSymbols, fetchPrices, prepareReport });

        //when
        const reportPromise = yield fetch('someFile');

        //then
        assert.equal(reportPromise, 'report');
        expectedAssertionCount++;
        assert.equal(expectedAssertionCount, 4, 'expected number of assertions');

    });
});