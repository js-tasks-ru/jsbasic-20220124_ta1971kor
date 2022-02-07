function ucFirst(str) {
    if (str === '') {
        return '';
    }
    let strUpper = str.toUpperCase();
    return strUpper[0] + str.slice(1);
}
