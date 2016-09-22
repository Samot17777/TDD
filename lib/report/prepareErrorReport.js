module.exports = function (errorArray) {
    let responseText = "Ticker symbols with error:\n";
    errorArray.forEach(el => responseText += `${el[0]}   ${el[1]}\n`);
    return responseText;
};