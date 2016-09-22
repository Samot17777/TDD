module.exports = function ({request}) {
    return function (symbols) {
        return Promise.all(requests(request, symbols));
    };
};

function requests(request, symbols) {
    return symbols.map(symbol =>
        neverFailing(request(`http://ichart.finance.yahoo.com/table.csv?s=${symbol}`)));
}

function neverFailing(p) {
    return p.catch(identity);
}

var identity = x => x;