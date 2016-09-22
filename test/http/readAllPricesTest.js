const assert = require('assert');
const readAllPrices = require('../../lib/http/readAllPrices');
const coMocha = require('co-mocha');



describe ('read all prices', () => {
    it('[integration test] should return some 200s', function * () {
        const request = require('good-guy-http')();
        //given
        const readPrices = readAllPrices({request});
        //when
        const result = yield readPrices(['GOOG','AAPL','Allahakbar']);
        //then  
        result.forEach( el => assert.equal(el.statusCode, 200));
    });

});