var result = "<table>";
console.log(typeof result);

// sinh ra hàng (row)
for (var i = 1; i <= 10; i++) {
  result = result + "<tr>";

  // chạy từ 1 đến 10
  for (var j = 1; j <= 10; j++) {
    result = result + `<td> ${i * j} </td>`;
  }

  result = result + "</tr>";
}

result = result + "</table>";
document.write(result);
// Bài 1:
let n = 5;
for (let i = 0; i <= n; i++) {
  console.log(`The number is ${i}`);
}
// Bài 2:
var result = "<table>";
console.log(typeof result);

// sinh ra hàng (row)
for (var i = 1; i <= 10; i++) {
  result = result + "<tr>";

  // chạy từ 1 đến 10
  for (var j = 1; j <= 10; j++) {
    result = result + `<td> ${i * j} </td>`;
  }

  result = result + "</tr>";
}

result = result + "</table>";
document.write(result);
// Bài 3:
let number = prompt("Nhập số để tính tổng");
if (Number(number) != -1) {
  let sum = 0;
  for (let i = 0; i < +number; i++) {
    sum += i;
  }
  console.log(sum);
}
// Bài 4:

let hr = "";
for (let i = 1; i <= 100; i++) {
  hr += `<hr width="${i}"/>`;
}
document.write(hr);
// Bài 5:

for (let i = 1; i <= 5; i++) {
  console.log(`The number is ${i}`);
}

// Bài 6:
let numberN = prompt("Nhập số nguyên dương");

if (Number(numberN) > 0) {
  for (let i = 0; i <= Number(numberN); i++) {
    if (i % 2 == 0) {
      console.log(`Số chẵn của dãy số từ 0 đến ${numberN} : ${i}`);
    }
  }
}

// Bài 7:
// var soNguyen = prompt("nhập một số nguyên dương");
// while (Number(soNguyen) > 0) {
//   let sum = 0;
//   var soNguyen = prompt("nhập một số nguyên dương1");
//   //   soNguyen = soNguyen + soNguyen;
//   sum = sum + Number(soNguyen);
//   console.log(sum);
// }
