const assert = require('assert');
const readAllPrices = require('../../lib/http/readAllPrices');
const coMocha = require('co-mocha');



describe ('read all prices', () => {
    it.skip('[integration test] should return some 200s TRUE STORY IT REALLY SHOOT', function * () {
        const request = require('good-guy-http')();


        //given
        const readPrices = readAllPrices({request});
        //when
        const result = yield readPrices(['GOOG','AAPL','Allahakbar']);
        //then  
        assert.equal(result[0].statusCode, 200);
        assert.equal(result[1].statusCode, 200);
        assert.equal(result[2].statusCode, 404);
    });
    it('[integration test] should return some 200s or 404 or what ?', function * () {
        function request(url) {
             return url.endsWith('INVALID') ?  Promise.reject({statusCode : 404}) : Promise.resolve({statusCode: 200});
        }


        //given
        const readPrices = readAllPrices({request});
        //when
        const result = yield readPrices(['GOOG','AAPL','INVALID']);
        //then  
        assert.equal(result[0].statusCode, 200);
        assert.equal(result[1].statusCode, 200);
        assert.equal(result[2].statusCode, 404);
    });


});