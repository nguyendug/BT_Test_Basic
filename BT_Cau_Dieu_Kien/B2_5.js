//alert('Nhập mã sinh viên: ')
let str = prompt("Nhập mã sinh viên: ")
console.log("Chuỗi vừa nhập: ", str)
const check = (str) => {
    let kq = /.B*\d{7}.*/
    if (str.match(kq) && str.length == 8)
        return `Mã sinh viên vừa nhập hợp lệ`;
    else
        return `Mã sinh viên vừa nhập không hợp lệ`;
}
console.log(check(str))