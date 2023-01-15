let n = prompt("Nhập n là số mã sinh viên cần kiểm tra")
for (let i = 0; i < n; i++) {
    let msv = prompt("Nhập mã sinh viên: ")
    console.log(`Mã sinh viên thứ: ${i + 1}`, msv)
    const check = (str) => {
        let kq = /.B*\d{7}.*/
        if (str.match(kq) && str.length == 8)
            return `Mã sinh viên vừa nhập hợp lệ`;
        else
            return `Mã sinh viên vừa nhập không hợp lệ`;
    }
    console.log(check(msv))
}

