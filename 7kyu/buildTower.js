let nFloors = 2
let counter = 0
let tower = []

for (let i = 1; i <= nFloors; i++) {
    let star = '*'.repeat(i + counter)
    let space = " ".repeat(nFloors - i)
    tower.push(`${space}${star}${space}`)
    counter += 1
}
console.log(tower);