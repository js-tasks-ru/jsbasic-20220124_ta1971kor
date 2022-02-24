function makeFriendsList(friends) { 
    let list = document.createElement("ul");

    for (let i = 0; i < friends.length; i++) { 
        let friend = friends[i]; 
        let firstName = friend.firstName;
        let lastName = friend.lastName;
        list.innerHTML = list.innerHTML + `<li>${firstName} ${lastName}</li>`
    }
    return list;
}
