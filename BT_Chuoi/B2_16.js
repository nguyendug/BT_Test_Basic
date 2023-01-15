let mangkytu = []
let str = prompt("Nhập một chuỗi: ")
console.log("Chuỗi vừa nhập: ", str)
let kytu = prompt("Nhập ký tự cần tìm")
console.log("Ký tự cần tìm: ", kytu)
mangkytu = str.split('');
let ketqua = false;
for (let i = 0; i < mangkytu.length; i++) {
    if (kytu == mangkytu[i]) {
        console.log("Chuỗi trên có chứa ký tự cần tìm");
        ketqua = true;
    }
}
if (ketqua == false) console.log("Chuỗi trên không có ký tự cần tìm")