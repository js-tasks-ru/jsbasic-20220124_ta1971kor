function camelize(str) {
    let result = "";
    let parts = str.split("-");
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (i === 0) {
            result = result + part;
        } else {
            let upper = ucFirst(part);
            result = result + upper;
        }
    }
    return result;
}
function ucFirst(str) {
    if (str === '') {
        return '';
    }
    let strUpper = str.toUpperCase();
    return strUpper[0] + str.slice(1);
}