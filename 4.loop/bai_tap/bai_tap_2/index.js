console.log("Bài tập loop from HTML");

// Bài 1:
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Số " + i + " FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Số " + i + " Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Số " + i + " Buzz");
//   }
// }

// Bài 2:
// let n = prompt("Nhập số kiểm tra số nguyên tố");
// if (Number(n) > 2) {
//   for (let i = 2; i < n; i++) {
//     if (Number(n) % i == 0) {
//       console.log("Số " + n + " không phải số nguyên tố");
//       break;
//     } else {
//       console.log("Số " + n + " là số nguyên tố");
//     }
//   }
// } else {
//   console.log("Không phải số nguyên tố");
// }
// Bài 3:
// Bài 4:
// let number = prompt("Nhập số để tính giai thừa của nguyên dương");
// let sum = 0;
// for (let i = 1; i <= Number(number); i++) {
//   sum += i;
// }
// console.log(sum);
// Bài 5:
// var start = parseInt(prompt("Nhập số nguyên để tạo hình tam giác vuông:"));
// for (var i = 1; i <= start; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }
// Bài 6:
// for (let i = 1; i <= 100; i++) {
//   if (i == 99) {
//     console.log("Đã hoàn thành");
//     break;
//   } else {
//     console.log(i);
//   }
// }
// Bài tập thuật toán:
// 1: biến hình này thành hình ai cũng có thể tạo được
// 2: dựa vào kiến thức anh có để giản tối thiểu giải quyết vấn đề
var star = parseInt(prompt("Nhập số nguyên để tạo hình tam giác vuông:"));
for (var row = 1; row <= star; row++) {
  let starItem = "";
  for (var j = 1; j <= star; j++) {
    if (row + j > star) {
      starItem = starItem + "*";
    } else {
      starItem = starItem + "1";
    }
  }
  starItem = starItem + "<br/>";
  document.write(starItem);
}
// Suy nghĩ và tìm ra giải pháp  cho vấn đề  thuật toán của mình
// 1: xem yêu cầu và phân tích
// 2: Giới hạn  điều kiện giải quyết bài toán (bao gồm search)
// Quy luật cho thuật toán
// Tìm ra biểu thức giới hạn vòng lặp từ biến phụ thuộc row
// Hàng (row)  -> Hiện thị kết quả sao
// 1-> 10
// 2-> 9
// 3-> 8
// 4-> 7
// 5-> 6
// 6-> 5
// 7-> 4
// 8-> 3
// 9-> 2
// 10->1
