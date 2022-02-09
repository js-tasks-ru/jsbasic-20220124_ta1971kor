function namify(users) {
    let result = [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let name = user.name;
        result.push(name);
    }
    return result;
}
