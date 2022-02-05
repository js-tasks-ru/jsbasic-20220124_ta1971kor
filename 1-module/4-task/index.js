function checkSpam(str) {
    let strLower = str.toLowerCase();
    let spam1 = '1xBet';
    let spam2 = 'XXX';
    let spam1Lower = spam1.toLowerCase();
    let spam2Lower = spam2.toLowerCase();
    if (strLower.indexOf(spam1Lower) !== -1) {
        return true;
    }
    if (strLower.indexOf(spam2Lower) !== -1) {
        return true;
    }
    return false;
}

