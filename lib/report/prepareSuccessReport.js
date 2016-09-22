module.exports = function (succesArray) {
    let responseText = "Prices for ticker symbols:\n";
    succesArray.forEach(el => responseText+=`${el[0]}   ${el[1]}\n`);
    return responseText;
};