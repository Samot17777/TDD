const fs = require('fs');
const request = require('good-guy-http')();

fs.readFile('./text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var symbols = data.split('\n');

    symbols.forEach(function(symbol) {
        request(`http://ichart.finance.yahoo.com/table.csv?s=${symbol}`)
            .then(function(response) {
                console.log(symbol + ' ' + response.body.split('\n')[1].split(',')[1]);
            });
    });

});