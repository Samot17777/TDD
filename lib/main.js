const fs = require('fs');
const readFile = require('./file/readFile')({fs});
const parseSymbols  = require('./file/parseSymbols');
const fetchSymbols  = require('./file/fetchSymbols')({readFile, parseSymbols});

const request = require('good-guy-http')();
const readAllPrices = require('./http/readAllPrices')({request});
const parseCurrentPrices = require('./http/parseCurrentPrices');
const fetchPrices = require('./http/fetchPrices')({readAllPrices, parseCurrentPrices});


const partitionResult = require('./report/partitionResults');
const prepareSuccessReport = require('./report/prepareSuccessReport');
const prepareErrorReport = require('./report/prepareErrorReport');
const createReport = require('./report/createReport')({partitionResult, prepareSuccessReport,prepareErrorReport });

const handleError = console.error;

const stockfetch = require('./stockfetch')({fetchSymbols, fetchPrices, createReport});

stockfetch('../symbols.txt').then(console.log).catch(handleError);