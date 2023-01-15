//set mặc định giá trị
let a, b, c;
const tamgiac = (a, b, c) => {
    //let tong = ` Đây không là 3 cạnh của tam giác`;
    if (a + b > c && a + c > b && c + b > a) {
        return (` Đây là 3 cạnh của tam giác`)
    }
    else return (" Đây không là 3 cạnh của tam giác")
}
console.log(tamgiac(2, 3, 5))

//nhập
let n = alert("Nhập 3 cạnh của tam giác");
let x = prompt('Cạnh x')
let y = prompt('Cạnh y')
let z = prompt('Cạnh z')
console.log(`Các cạnh đã nhập: ${x}, ${y}, ${z}`)

const tgiac = (x, y, z) => {
    if (x + y > z && x + z > y && y + z > x) {
        return (` Đây là 3 cạnh của tam giác`)
    }
    else return (" Đây không là 3 cạnh của tam giác")
}
console.log(tgiac(x, y, z))
