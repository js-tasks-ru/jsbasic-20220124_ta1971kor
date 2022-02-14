function getMinMax(str) {
    let parts = str.split(" ");
    let numbers = [];
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        let partIsNumeric = isNumeric(part);
        if (partIsNumeric === true) {
            numbers.push(+part);
        }
    }
    let currentMin;
    let currentMax;
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (currentMin === undefined) {
            currentMin = number;
        } else {
            currentMin = Math.min(currentMin, number);
        }
        if (currentMax === undefined) {
            currentMax = number;
        } else {
            currentMax = Math.max(currentMax, number);
        }
    }
    return {
        min: currentMin,
        max: currentMax,
    }
}

function isNumeric(n) {
    if (n === "") {
        return false;
    }
    let attempt = +n;
    return isFinite(attempt);
}
