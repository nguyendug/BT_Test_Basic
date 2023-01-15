let n = prompt("Nhập số nguyên n <=20");
const check = (n) => {
    if (n == 0 || n == 1) {
        return 1;
    }
    return check(n - 1) + check(n - 2);
}
console.log(`Số fibonaci tương ứng với ${n} là: `, check(n));

