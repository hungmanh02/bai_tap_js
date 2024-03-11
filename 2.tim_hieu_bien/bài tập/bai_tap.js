// Bài 1:
var firstName = "Code";
var lastName = "love";
var fullName = firstName + lastName;
// Bài 2: Liệt kê các kiểu dữ liệu, mỗi cái cho 1 ví dụ cụ thể về kiểu dữ liệu đó.
// kiểu dữ liệu number
console.log(typeof 3);
// kiểu dữ liệu string
console.log(typeof "Codelove");
// kiểu dữ liệu undefined
console.log(typeof undefined);
// kiểu dữ liệu null
console.log(typeof null);
// kiểu dữ liệu object
console.log(typeof {});
// Bài 3:
var ly = prompt("Nhập điểm lý của sinh viên");
console.log(typeof ly);
var hoa = prompt("Nhập điểm hóa của sinh viên");
var sinh = prompt("Nhập điểm sinh của sinh viên");
var trungBinh = (Number(ly) + Number(hoa) + Number(sinh)) / 3;
var tong = Number(ly) + Number(hoa) + Number(sinh);
document.write("Điểm trung bình của 3 môn: " + trungBinh + " điểm</br>");
document.write("Tổng điểm của sinh viên: " + tong + " điểm</br>");
// Bài 4:
var celsius = prompt("Chương trình đổi độ C sang đọ F");
var fahrenheit = (9 / 5) * celsius + 32;
document.write("Độ F của " + celsius + " =" + fahrenheit + "</br>");
// Bài 5: Viết chương trình tính diện tích hình tròn.
var radiusOfAcreage = prompt(
  "Chương trình tính diện tích hình trò, xin vui lòng nhập bán kính của hình tròn"
);

var acreageOfCircle = 3.14 * radiusOfAcreage * radiusOfAcreage;
document.write(
  "Diệm tích của hình tròn có bán kính " +
    radiusOfAcreage +
    " = " +
    acreageOfCircle +
    "</br>"
);
// Bài 6: Viết chương trình chu vi hình tròn.
var radiusOfCircum = prompt(
  "Chương trình tính chu vi hình trò, xin vui lòng nhập bán kính của hình tròn"
);
var circumOfCircle = 2 * 3.14 * radiusOfCircum;
document.write(
  "Chu vi của hình tròn có bán kính " +
    radiusOfCircum +
    " = " +
    circumOfCircle +
    "</br>"
);
// Bài 7: Viết chương trình chuyển tiền $ sang vnđ

var usd = prompt(
  "Chương trình chuyển tiền đô sang tiền việt nam, vui lòng nhập số tiền đô muốn chuyển"
);
var vnd = usd * 23000;
document.write("Chuyển " + usd + " đô sang tiền việt nam = " + vnd + "</br>");

// Bài 8: Viết chương trình tính chu vi và diện tích hình chữ nhật

alert("Chương trình tính diện chu vi và diện tích hình chữ nhật");
var a = prompt("Nhập chiều dài của hình chữ nhật");
var b = prompt("nhập chiều rộng của hình chữ nhật");
var acreageOfRectangular = a * b;
var circumOfRectangular = (a + b) * 2;
document.write("Diện tích hình chữ nhật: " + acreageOfRectangular + "</br>");
document.write("Chu vi hình chữ nhật: " + circumOfRectangular + "</br>");
alert("Chương trình tính diện chu vi và diện tích hình vuông");
var canhvuong = prompt("Nhập chiều cảnh của hình vuông");
var chuvi = canhvuong * 4;
var dientich = canhvuong * canhvuong;
document.write("Diện tích hình vuông : " + dientich + "</br>");
document.write("Chu vi hình vuông : " + chuvi + "</br>");
/**
 *  # Tìm hiểu phần sau, đọc các nguồn khác nhau để nắm rõ bối cảnh sử dụng của từng hàm
 * How to Convert a String to a Number in JavaScript (search google)
  1.sử dụng Number()chức năng
  2.sử dụng parseInt()chức năng
  3.sử dụng parseFloat()chức năng
  4.sử dụng toán tử cộng đơn ( +)
  5.nhân chuỗi với số 1
  6.chia chuỗi cho số 1
  7.trừ số 0 khỏi chuỗi
  8.sử dụng toán tử bitwise NOT ( ~)
  9.sử dụng Math.floor()chức năng
  10.sử dụng Math.ceil()chức năng
  11.sử dụng Math.round()chức năng
  ví dụ : -----------------
  // Number();
// parseInt();
// parseFloat();
// Chúng ta cũng có thể sử dụng toán tử cộng đơn ( +) để chuyển một chuỗi thành số dấu phẩy động.
// const quantity = "12.99";
// console.log(+quantity);
// Nếu giá trị chuỗi không thể chuyển đổi thành số thì kết quả sẽ là NaN
// const quantity = "awesome";
// console.log(+quantity);
// Bạn có thể nhân giá trị chuỗi với 1 và nó sẽ trả về một số.
// const quantity = "12";
// console.log(quantity * 1);
// Nếu chuỗi không thể chuyển đổi thành số thì phép toán sẽ không hoạt động và nó sẽ trả về NaN.
// const quantity = "awesome";
// console.log(quantity * 1);
// trừ 0 khỏi chuỗi
// bạn cũng có thể chia chuỗi cho 1
// Nếu chúng ta sử dụng một toán tử NOT theo bit ( ~) trên một số thì nó sẽ thực hiện thao tác này: -(x + 1)
// console.log(~19); bằng -20
// Nhưng nếu chúng ta sử dụng hai toán tử NOT theo bit ( ~), thì nó sẽ chuyển chuỗi của chúng ta thành một số.
// const quantity = "19";
// console.log(~~quantity); bằng 19
// Phương pháp này sẽ không hoạt động đối với số dấu phẩy động vì kết quả sẽ là số nguyên.
// const quantity = "19.99";
// console.log(~~quantity); bằng 19
// Math.floor() hàm này sẽ làm tròn số xuống số nguyên gần nhất.
// nếu chúng ta cố gắng sử dụng các ký tự không phải số thì kết quả sẽ là NaN.
// const quantity = "awesome";
// console.log(Math.floor(quantity));
// Hàm Math.ceil() sẽ làm tròn một số lên số nguyên gần nhất.
// Nếu tôi có giá trị là 7.18 thì Math.ceil() sẽ trả về 8.
// const quantity = "7.18";
// console.log(Math.ceil(quantity)); bằng 8
// Hàm Math.round()sẽ làm tròn số đến số nguyên gần nhất.
// Nếu tôi có giá trị là 6,3 thì Math.round() sẽ trả về 6.
// const quantity = "6.3";
// console.log(Math.round(quantity));
// nếu nhỏ hơn 5 thì sẽ làm tròn xuống
// Nhưng nếu tôi thay đổi giá trị đó thành 6,5 thì Math.round() sẽ trả về 7.
// const quantity = "6.5";
// console.log(Math.round(quantity));
 * # Tìm hiểu quy tắc đặt tên biến js và giải thích để nhớ theo biến - value
 * # giá trị nhận được của hàm promp là kiểu dữ liệu nào?
  //  Giá trị nhận được của hàm prompt là kiểu dữ liệu string
 * # How to convert number to string
 * How to Convert a Number to String in JavaScript (search google)
 * # Tìm hiểu lí thuyết về Control flow (if - else)
 * */
