alert("Nhập 3 cạnh của tam giác");
let x = prompt("Cạnh x");
let y = prompt("Cạnh y");
let z = prompt("Cạnh z");
console.log(`Các cạnh đã nhập: ${x}, ${y}, ${z}`);

const tgiac = (x, y, z) => {
  if (
    x * x + y * y == z * z ||
    x * x + z * z == y * y ||
    z * z + y * y == x * x
  ) {
    return ` Đây là 3 cạnh của tam giác vuông`;
  } else return " Đây không là 3 cạnh của tam giác vuông";
};
console.log(tgiac(x, y, z));
