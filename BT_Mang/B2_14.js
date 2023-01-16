let n = prompt("Nhập n: ");
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = prompt(` Nhập phần thử thứ ${i + 1}`);
}

let empty;
for (let i = 0; i < n / 2; i++) {
  empty = arr[i];
  arr[i] = arr[n - i - 1];
  arr[n - i - 1] = empty;
}
console.log("Số bé nhất là: ", arr);
