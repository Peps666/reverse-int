module.exports = function reverse (n) {
    let result = 0;
    let modul = Math.abs(n);
    while ( modul > 0) {
        result = result * 10 + modul % 10;
        modul = Math.floor ( modul / 10);
    };
    return result;
};
