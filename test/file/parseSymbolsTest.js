const assert = require('assert');
const parseSymbols = require('../../lib/file/parseSymbols');


describe ('parse symbols', () => {
    it('should return [GOOG, AAPL] when "GOOG\nAAPL"', function () {
        const symbols  = parseSymbols('GOOG\nAAPL');
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
    it('should return [GOOG, AAP] when "GOOG       \nAAPL\n\n"', function () {
        const symbols  = parseSymbols('GOOG       \nAAPL\n\n');
        assert.deepEqual(symbols, ["AAPL"]);
    });
});