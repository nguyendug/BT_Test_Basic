let n = prompt("Nhập số nguyên dương n");
let temp = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    temp += i;
  }
}
console.log("Tổng các số chẵn: ", temp);
