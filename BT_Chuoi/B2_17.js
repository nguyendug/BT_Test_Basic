//let mangkytu = [];
let str = prompt("Nhập một chuỗi: ");
console.log("Chuỗi vừa nhập: ", str);
let kytu = prompt("Nhập ký tự cần tìm");
console.log("Ký tự cần tìm: ", kytu);
//mangkytu = str.split("");
//let ketqua = false;
// for (let i = 0; i < mangkytu.length; i++) {
//   if (kytu == mangkytu[i]) {
//     console.log("Chuỗi trên có chứa ký tự cần tìm");
//     console.log(`Vị trí của ký tự cần tìm là: ${i}`);
//     ketqua = true;
//   }
// }
// if (ketqua == false) {
//   console.log(`Không tồn tại ký tự cần tìm trong chuỗi`);
// }

let result = str.indexOf(kytu);
if (result == -1) {
  console.log("Chuỗi trên không có ký tự cần tìm");
} else {
  console.log("Chuỗi trên có chứa ký tự cần tìm");
  console.log(`Vị trí của ký tự là ${result + 1}`);
}
