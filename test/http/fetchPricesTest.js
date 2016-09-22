const fetchPrices = require('../../lib/http/fetchPrices');
const assert = require('assert');
const coMocha = require('co-mocha');

describe ('fetchPrices e2e', () => {


    it('should pass ? ',   function * () {
        //given
        let expectedAssertionCount = 0;
        
        const readAllPrices =  (arrayOfSymbols) => {
            expectedAssertionCount++;
            assert.deepEqual(arrayOfSymbols,['GOOG','APPL']);
            return Promise.resolve(['r1','r2']);
        };
        const parseCurrentPrices =  (arrayOfResponses) => {
            expectedAssertionCount++;
            assert.deepEqual(arrayOfResponses,['r1','r2']);
            return ['10', '20'];
        };

        const fetch = fetchPrices({ readAllPrices, parseCurrentPrices});
        //when 
        const values = yield fetch(['GOOG','APPL']);

        //then
        assert.deepEqual(values, [['GOOG','10'],['APPL','20']]);
        expectedAssertionCount++;
        assert.equal(expectedAssertionCount, 3, 'expected number of assertions');
    });


});
