let n = prompt("Nhập số n bất kỳ nhỏ hơn 1000");
//console.log("Số 1, 2 là số nguyên tố");
for (let i = 1; i <= n; i++) {
    let soNT = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            soNT = false;
        }
    }
    if (soNT == true)
        console.log("Các số nguyên tố là: ", i)
}