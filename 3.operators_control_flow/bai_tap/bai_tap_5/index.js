// Bài 1: Viết chương trình nhập vào số tuổi của 1 người.Nếu số tuổi người đó >=18
// tuổi , hiển thị thông báo trên 18 tuổi ngược lại bạn chưa đủ 18 tuổi!
// var age = prompt("Nhập số tuổi của một người");
// if (parseInt(age) >= 18) {
//   console.log("Bạn trên 18 tuổi");
// } else {
//   console.log("Bạn chưa đủ 18 tuổi");
// }

// Bài 2: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// -Nếu dưới 18h thì hiển thị : “Good day”.
// -Nếu trên 18h thì hiển thị : “Good evening”.
// var hour = prompt("nhập vào số giờ trong ngày");
// if (parseInt(hour) > 18) {
//   console.log("Good evening");
// } else {
//   console.log("Good day");
// }

// Bài 3: Viết chương trình cho phép người dùng nhập vào số giờ trong ngày.
// -Nếu trước 10h thì hiển thị : “Good morning”.
// -Nếu thời gian chưa tới 20h thì hiển thị : “Good day”.
// -Nếu sau 20h hiển thị : “Good evening”.
// var hour = prompt("nhập vào số giờ trong ngày");
// if (parseInt(hour) < 10) {
//   console.log("Good morning");
// }
// if (parseInt(hour) > 10 && parseInt(hour) <= 20) {
//   console.log("Good day");
// }
// if (parseInt(hour) > 20) {
//   console.log("Good evening");
// }

// Bài 4: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng câu điều kiện if-else).
// var number = prompt("Nhập vào một số");
// if (parseInt(number) % 2 == 0) {
//   console.log("Số chẵn");
// } else {
//   console.log("số lẻ");
// }

// Bài 5: Viết chương trình cho phép người dùng nhập vào 1 số.
// Kiểm tra xem số nhập vào là số chẵn hay số lẻ (sử dụng switch case).
// var number = prompt("Nhập vào một số");
// switch (parseInt(number) % 2) {
//   case 0:
//     console.log("Số chẵn");
//     break;
//   case 1:
//     console.log("số lẻ");
//     break;
//   default:
//     console.log("Bạn chưa nhập số");
// }

// Bài 6: Viết chương trình cho phép người dùng nhập màu vào kiểm tra.
// -Nếu nhập 1 trong các màu : xanh, đỏ,vàng thì hiển thị màu người dùng nhập
// -Nếu nhập màu khác hiển thị màu không hợp lệ!

// Bài 7: Viết chương trình cho phép người dùng nhập vào số nguyên x:
// -Nếu x==0 thì in ra x có giá trị là 0;
// -Nếu x>0 thì in ra x là số nguyên dương.
// -Nếu x<0 thì in ra x là số nguyên âm.
// var x = prompt("Người dùng nhập vào số nguyên");
// if (parseInt(x) == 0) {
//   console.log(0);
// }
// if (parseInt(x) > 0) {
//   console.log(x + " là số nguyên dương");
// }
// if (parseInt(x) < 0) {
//   console.log(x + " là số nguyên âm");
// }

// Bài 8: Tính chỉ số cân nặng BMI :
// Viết chương trình cho phép người dùng nhập vào cân nặng(kg) và chiều cao(m);
// Sau đó hiển thị kết quả phân loại theo chỉ số BMI dưới đây.
// bmi = weight / ( height ^ 2 );
// xem ảnh đính kèm để hiển thị đúng kết quả (bmi.png)
// var weight = prompt("Nhập cân nặng (kg) của một người");
// var height = prompt("Nhập chiều cao (m) của một người");
// var bmi = parseFloat(weight) / parseFloat(height) ** 2;
// if (bmi >= 40) {
//   console.log("BMI của người dùng Béo phì độ III");
// } else if (bmi >= 35 && bmi < 39.9) {
//   console.log("BMI của người dùng Béo phì độ II");
// } else if (bmi >= 30 && bmi < 34.9) {
//   console.log("BMI của người dùng Béo phì độ I");
// } else if (bmi >= 25 && bmi < 29.9) {
//   console.log("BMI của người dùng Tiền béo phì");
// } else if (bmi >= 25) {
//   console.log("BMI của người dùng Thừa cân");
// } else if (bmi >= 18.5 && bmi < 24.9) {
//   console.log("BMI của người dùng Bình thường");
// } else {
//   console.log("BMI của người dùng Cân nặng thấp (gầy)");
// }

// Bài 9: Viết chương trình cho phép người dùng nhập điểm các môn:Toán,Lí,Hoá,
// Văn, Sử , Địa (thang điểm 10);
// -Sau đó tính điểm trung bình các môn học
// -Hiển thị kết quả học tập theo loại như sau:
// var toan = prompt("Nhập điểm môn Toán thang điểm 10");
// var li = prompt("Nhập điểm môn Lí thang điểm 10");
// var hoa = prompt("Nhập điểm môn Hóa thang điểm 10");
// var van = prompt("Nhập điểm môn Văn thang điểm 10");
// var su = prompt("Nhập điểm môn Sử thang điểm 10");
// var dia = prompt("Nhập điểm môn Địa thang điểm 10");
// var dtb =
//   (parseFloat(toan) +
//     parseFloat(li) +
//     parseFloat(hoa) +
//     parseFloat(van) +
//     parseFloat(su) +
//     parseFloat(dia)) /
//   6;
// if (dtb >= 8.0 && dtb <= 10) {
//   console.log("Xếp loại giỏi");
// } else if (dtb >= 6.5 && dtb <= 7.9) {
//   console.log("Xếp loại khá");
// } else if (dtb >= 5.0 && dtb <= 6.4) {
//   console.log("Xếp trung bình");
// } else {
//   console.log("Xếp loại yếu");
// }

// 8.0 <=ĐTB<=10: xếp loại GIỎI.
// 6.5<=ĐTB<=7.9: xếp loại KHÁ.
// 5.0<=ĐTB<=6.4: xếp loại TRUNG BÌNH.
// ĐTB<5.0 : xếp loại YẾU.

// Bài 10: Viết chương trình nhập vào số tháng trong năm,in ra số ngày trong tháng đó.
// Ví dụ : người dùng nhập vào số 7 thì in ra tháng 7 có 31 ngày.
