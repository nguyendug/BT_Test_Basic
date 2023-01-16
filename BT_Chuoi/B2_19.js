let mangkytu = [];
let str = prompt("Nhập một chuỗi: ");
console.log("Chuỗi vừa nhập: ", str);
let kytu = prompt("Nhập ký tự cần tìm");
console.log("Ký tự cần tìm: ", kytu);
mangkytu = str.split("");
let ketqua = false;
let dem = 0;
for (let i = 0; i < mangkytu.length; i++) {
  if (kytu == mangkytu[i]) {
    //console.log("Chuỗi trên có chứa ký tự cần tìm");
    dem += 1;
    ketqua = true;
  }
}
if (ketqua == false) {
  console.log(`Không tồn tại ký tự cần tìm trong chuỗi`);
}
console.log(`Số ký tự tìm được trong chuỗi là: ${dem}`);
