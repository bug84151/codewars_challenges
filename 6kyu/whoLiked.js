

function whoLiked(names) {
     if (names.length == 0) {
       console.log("no one likes this");
     } else if ((names.length == 1)) {
       console.log(`${names[0]} likes this`);
     } else if ((names.length == 2)) {
       console.log(`${names[0]} and ${names[1]} like this`);
     } else if ((names.length == 3)) {
       console.log(`${names[0]}, ${names[1]} and ${names[2]} like thiss`);
     } else {
       console.log(
         `${names[0]}, ${names[1]} and ${names.length - 2} 0thers like this`
       );
     }
}

whoLiked(["Max", "John", "Mark"]);