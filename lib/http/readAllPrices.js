module.exports = function ({request}) {
    return function (arrOfSymbols) {
        return Promise.all( arrOfSymbols.map(function(symbol) {
                    return request(`http://ichart.finance.yahoo.com/table.csv?s=${symbol}`).catch( () => Promise.resolve({ statusCode : 200}));
                })
            );

    }

};  
