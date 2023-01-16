let n = prompt("Nhập một chuỗi cần kiểm tra: ");
console.log(` Bạn vừa nhập chuỗi: ${n}`);
let kq = /^[A-Z][^\s]{0,18}\d$/;
if (n.match(kq)) console.log(`Duyệt`);
else console.log(`Không duyệt`);
