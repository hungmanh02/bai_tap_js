var userName = prompt("Nhập tên đăng nhập");

if (userName == "") {
  console.log("Canceled");
} else if (userName == "Admin") {
  var userPass = prompt("Nhập mật khẩu");
  if (userPass == "TheMaster") {
    console.log("Welcome");
  } else if (userPass == "") {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I don't know you");
}
