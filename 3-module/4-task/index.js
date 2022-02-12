function showSalary(users, age) {
    let result = "";
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (user.age <= age) {
            let iterationResult = user.name + ", " + user.balance;
            if (result === "") {
                result = result + iterationResult;
            } else {
                result = result + "\n" + iterationResult;
            }
        }
    }
    return result;
}
