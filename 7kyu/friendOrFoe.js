let friends = ["Ryan", "Kieran", "Mark"];
let friendsArr = [];

 for (let i = 0; i < friends.length; i++) {
       if (friends[i].length == 4) {
         friendsArr.push(friends[i])
     }
}

console.log(friendsArr);