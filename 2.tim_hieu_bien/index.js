// 1. Tìm hiểu câu lệnh in ra tab console của trình duyệt
console.log("Hello Word");
/**
 * I. khai báo biến
 */
// 2. Học cách khai báo biến trong js
// từ khóa var
var nameInfor;
// 3. khởi tạo giá trị ban đầu cho biến
nameInfor = "Đỗ Hùng Mạnh";
// 4. khai báo biến + khởi tạo giá trị ban đầu trong cùng 1 câu lệnh
// biến được sinh ra
var company = "Codelove";
// biến được update ( biến được sử dụng)
company = "Codelove 2";
// biến được sử dụng
var companyEnd = company;

/**
 * II. Các kiểu dữ liệu trong js
 * kiểu dữ liệu của biến sẽ chính là kiểu dữ liệu của value
 * vì biến được gán bằng value
 */
// 1. Kiểu dữ liệu boolean (true, false)
// 1.1 log ra kiểu dữ liệu theo value
console.log(typeof true);
console.log(typeof false);
// 1.2 lấy ví dụ về biến chứa value theo kiểu dự liệu đấy
var isConfirm = true;
var isCancel = false;
// 1.3 log ra kiểu dữ liệu của biến
console.log(typeof isConfirm);
console.log(typeof isCancel);
// 2. kiểu dữ liệu string ('hungmanh',"hungmanh",`hungmanh`)
// 2.1
console.log(typeof "hungmanh");
// 2.2
var nameInforClone = "hungmanh";
// 2.3
console.log(typeof nameInforClone);
// 3. kiểu dữ liệu number
// 3.1
console.log(typeof 3);
// 3.2
var age = 2;
// 3.3
console.log(typeof age);
// 4. kiểu dữ liệu undefined
// 4.1
console.log(typeof undefined);
// 4.2
var birtDay;
// 4.3
console.log(typeof birtDay);
// 5. kiểu dữ liệu null (duy nhấ=t value null)
// 5.1
console.log(typeof null);
// 5.2
var isNull = null;
// 5.3
console.log(typeof isNull);
// 6. kiếu dữ liệu object (lưu trữ nhiều value)
// 6.1
console.log(typeof {});
console.log(typeof []);
// 6.2
var Car = {
  name: "Honda",
  nam: "2023",
};
// 6.3
console.log(typeof Car);
// 7. Các hàm thông dụng trong js
// 7.1 hàm alert
// alert("Bạn đã về quê");
// 7.2 hàm confirm
// var isConfirm = confirm("Bạn đã đủ 18 tuổi chưa");
// console.log(isConfirm);
// 7.3 hàm prompt
// var nameUser = prompt("Xin bạn nhập tên");
// console.log(nameUser);
