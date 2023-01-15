let str = prompt("Nhập một chuỗi: ")
console.log("Chuỗi vừa nhập: ", str)
const kq = /.*\d.*/
if (str.match(kq))
    console.log("Có");
else
    console.log("Không");