const request = require('good-guy-http')();
const fs = require('fs');
var EventEmitter = require('events');
var symbols = [];
var event = new EventEmitter();
event.on('data', function (dane) {
    console.log(dane.symbol, dane.value);
});


fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  symbols = data.split('\r\n');
  symbols.forEach(function (el) {
    request('http://ichart.finance.yahoo.com/table.csv?s='+ el).then(function (response) {
        var firstRow = response.body.split("\n");
        var secondRowItems = firstRow['1'].split(",");
        event.emit('data', { symbol:el , value : secondRowItems['1']});

        return { symbol:el , value : secondRowItems['1']};

    }).catch(function (err) {
        if(err.statusCode == 404){
            var x = err.request.url.split('=');
            var sym = x[x.length-1];
            event.emit('data', { symbol: sym, value : 'Not found'});
        }
    });
  });
});

