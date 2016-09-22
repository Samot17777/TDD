const zip = require('lodash.zip');

module.exports = ({ readAllPrices, parseCurrentPrices}) => {
    return arrayOfSymbols => {
        return  readAllPrices(arrayOfSymbols).then(parseCurrentPrices).then(function (prices) {
            return zip(arrayOfSymbols, prices);
        })
    };
};