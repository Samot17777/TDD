module.exports = function({partitionResults, prepareSuccessReport, prepareErrorReport}) {
    return function(data) {
        const successAndError = partitionResults(data);

        return prepareSuccessReport(successAndError[0]) + prepareErrorReport(successAndError[1]);
    }
};