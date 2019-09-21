// const a = "a"; // ห้ามเปลี่ยนค่า
// a = "B";

// let a = "a";   // เปลี่ยนค่าได้
// a = "b";
// console.log(a);

// var a = "a"; // เปลี่ยนค่าได้ คล้าย let
// a = "c";
// console.log(a);

let a = "a";
{
  let a = "b";
  console.log(1, a);
}
console.log(2, a);

var a = "a";
{
  var a = "b";
  console.log(1, a);
}
console.log(2, a);
