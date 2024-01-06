let n = 0

for (let i = 0; i < n; i++){
    if (n % i == 0 && i * i == n) {
        console.log(true);
    } else{
        console.log(false);
    }
}
