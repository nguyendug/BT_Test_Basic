let n = prompt("Nhập n: ");
let arr = []
let min = 0;
for (let i = 0; i < n; i++) {
    arr[i] = prompt(` Nhập phần thử thứ ${i + 1}`);
    min = arr[0];
    if (arr[i] < min)
        min = arr[i];
}
console.log("Số bé nhất là: ", min)