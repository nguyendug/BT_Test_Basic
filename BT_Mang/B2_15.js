let n = prompt("Nhập n là số mã số cần kiểm tra: ");
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = prompt(` Nhập mã số thứ ${i + 1}`);
}
console.log(arr);

for (let i = 0; i < n; i++) {
  const check = (arr) => {
    let kq = /.00*\d[2-5]*L*\d{0,4}.*/;
    if (arr[i].match(kq) && arr[i].length == 8) return `Đúng rồi`;
    else return `Sai rồi`;
  };
  console.log(check(arr));
}
