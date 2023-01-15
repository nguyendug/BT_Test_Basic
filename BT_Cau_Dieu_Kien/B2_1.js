let n = prompt("Nhập một số");
const check = (a) => {
    let kt = `${a} Đây là số nguyên dương`
    if (a < 0)
        return (`${a} Đây là số nguyên âm`);
    return kt;
}
console.log(check(n));