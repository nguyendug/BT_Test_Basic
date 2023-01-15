let n = prompt("Nhập n: ");
let arr = []
let tbc;
let tong = 0;
for (let i = 0; i < n; i++) {
    arr[i] = prompt(` Nhập phần thử thứ ${i + 1}`);
    tong += Number(arr[i]);
}
tbc = tong / arr.length;
console.log("Trung binh cong: ", tbc)
