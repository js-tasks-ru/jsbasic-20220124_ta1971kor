function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    let cut = str.slice(0, maxlength - 1);
    return cut + '…';
}
