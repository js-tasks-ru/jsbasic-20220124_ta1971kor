function filterRange(arr, a, b) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num >= a && num <= b) {
            result.push(num);
        }
    }
    return result;
}
