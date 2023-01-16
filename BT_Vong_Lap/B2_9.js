let n = prompt("Nhập số nguyên n <=20");
if (n > 20) {
  alert("Bạn vừa nhập n không đúng điều kiện!! Mời bạn nhập lại!!");
  n = prompt("Nhập số nguyên n <=20");
}

let fib = [0, 1];
for (i = 2; i <= n; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(`Số fibonaci tương ứng với ${i} là: `, fib[i]);
}
