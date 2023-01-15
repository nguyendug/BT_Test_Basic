let n = prompt("Nhập n: ");
let arr = []
let tong = 0;
let max = 0;
for (let i = 0; i < n; i++) {
    arr[i] = prompt(` Nhập phần thử thứ ${i + 1}`);
    if (arr[i] > max)
        max = arr[i];
}
console.log("Số lớn nhất là: ", max)