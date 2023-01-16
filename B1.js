// tính tổng
/*
console.log(`Tính tổng a + b`)
const sum = (a, b) => {
    return a + b;
}
console.log(`a + b = `, sum(5, 3))
*/

//Kiểm tra giá trị
console.log(`==========================================`);
console.log(`Kiểm tra giá trị đầu vào là giá trị âm hay dương`);

//tự code
//console.log(`---------------------------`)
let m = prompt("Nhập số phân tử muốn kiểm tra: ");
for (let i = 1; i <= m; i++) {
  let t = prompt("Nhập giá trị: ");
  const check = (a) => {
    let kt = `${a} không la số dương cũng không là số âm`;
    if (a > 0) {
      return `${a} là số dương`;
    } else if (a < 0) {
      return `${a} là số âm`;
    }
    return kt;
  };
  console.log(check(t));
}

/*
console.log(`---------------------------`)
console.log('Kiểm tra các giá trị trong mảng')
let array = [1, -2, 3, -4, -5, 6, 0];
for (let i = 0; i < array.length; i++) {
    console.log(check(array[i]));
}
/*
//tham khảo
console.log(`---------------------------`)
console.log('Mảng ở phần tham khảo có khác thông minh hơn hẳn :>>')
console.log('Nhưng mà mình cũng hơi thông minh một chút')
let ktra = (n) => {
    let flag = 0;
    if (n > 0) flag = 1;
    else if (n < 0) flag = -1;
    return flag;
}

let arr = [11, -23, 15, -44, -53, 76, 0];
for (let i = 0; i < arr.length; i++) {
    let y = ktra(arr[i]);
    if (y == 0) console.log(arr[i] + " la so 0");
    else if (y == 1) console.log(arr[i] + " la so duong");
    else console.log(arr[i] + " la so am");
}

console.log(`--------------------------`)
console.log('Phần này là nhập vào từ bàn phím')
let m = prompt('Nhập số phân tử muốn kiểm tra: ')
for (let i = 1; i <= m; i++) {
    let p = prompt("Nhập giá trị ");
    let x = ktra(p);
    if (x == 0) console.log(p + " la so 0");
    else if (x == 1) console.log(p + " la so duong");
    else console.log(p + " la so am");
}
console.log(`--------------------------`)
*/
