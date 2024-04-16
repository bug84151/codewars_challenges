let str = "1.2433.3.3"

let ipArray = str.split(".")
let isValid = true

for (let i = 0; i < ipArray.length; i++) {
    if (Number(ipArray[i]) > 255) {
        isValid = false;
    } else {
        isValid = true;
    }
}

if (ipArray.length == 4 && isValid == true) {
    console.log(isValid);
} else {
    isValid == false
    console.log(isValid);
    }
  
    // for (let i = 0; i < ipArray.length; i++) {
    //   if (ipArray.length != 4) {
    //     console.log("false");
    //   } else if (ipArray[i] > 255) {
    //       console.log("false");
    //   } else (
    //       console.log("true")
    //   )
    // }