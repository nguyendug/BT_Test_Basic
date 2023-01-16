let n = prompt("Nhập số n bất kỳ nhỏ hơn 1000");
if ((n) => 1000) {
  alert("Bạn vừa nhập n không đúng điều kiện!! Mời bạn nhập lại!!");
  n = prompt("Nhập số n bất kỳ nhỏ hơn 1000");
}
//console.log("Số 1, 2 là số nguyên tố");
for (let i = 1; i <= n; i++) {
  let soNT = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      soNT = false;
    }
  }
  if (soNT) console.log("Các số nguyên tố là: ", i);
}
