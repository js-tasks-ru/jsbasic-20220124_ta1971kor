function sumSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
        let value = salaries[key];
        if (typeof value !== 'number') {
            continue;
        }
        if (!isFinite(value)) {
            continue;
        }
        sum += value;
    }
    return sum
}
