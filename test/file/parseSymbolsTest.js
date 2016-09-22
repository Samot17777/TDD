const assert = require('assert');
const parseSymbols = require('../../lib/file/parseSymbols');


describe ('parse symbols', () => {
    it('should return [GOOG, AAPL] when "GOOG\r\nAAPL"', function () {
        const symbols  = parseSymbols('GOOG\r\nAAPL');
        assert.deepEqual(symbols, ['GOOG', 'AAPL']);
    });
    it('should return [] when empty', function () {
        const symbols  = parseSymbols('');
        assert.deepEqual(symbols, []);
    });
    it('should return [] when spaces', function () {
        const symbols  = parseSymbols('       ');
        assert.deepEqual(symbols, []);
    });
    it('should return [GOOG, AAP] when "GOOG       \r\nAAPL\r\n\n"', function () {
        const symbols  = parseSymbols('GOOG       \r\nAAPL\r\n\n');
        assert.deepEqual(symbols, ["AAPL"]);
    });
});