// function getInfo(event) {
//   console.clear();
//   event.preventDefault();
//   const name = $("#name");
//   const email = $("#email");
//   const password = $("#password");
//   console.log("name: ", name);
//   console.log("email: ", email);
//   console.log("password: ", password);
//   const reg = /^\w+@[a-zA-Z]{3,}\.com$/i;

//   if (!name) {
//     $("#errorname").html("Wrong Name");
//    name.css("boder-color", "#dc3545");
//   } else {
//     $("#errorname").html("");
//   }
//   if (reg.test(email) === false) {
//     console.log(reg.test(email));
//     $("#erroremail").html("Wrong Email");
//     email.css('border-color', "#dc3545");
//   } else {
//     console.log(reg.test(email));
//    $("#erroremail").html("");
//   }
//   if (password.length < 8) {
//     $("#errorpass").html( " Password is at least 8 characters");
//      password.css("border-color","#dc3545");
//   } else {
//    $("#errorpass").html("");
//   }

// }

//slide
function showSlides(num) {
  let s = $(".slide-cover");
  let e = $(".slide-6");
  if (num === 1) {
    s.css("transition-duration", "1s");
    s.css("transform", "translateX(-50%");
    setTimeout(() => {
      s.css("transition-duration", "0s");
      s.css("transform", "translateX(0%");
      s.append(e);
    }, 1000);
  }

  if (num === -1) {
    if (s.css("transform", "translateX(0%)") || !s.css("transform")) {
      s.css("transition-duration", "0s");
      s.css("transform", "translateX(-50%)");
    }
    setTimeout(() => {
      s.css("transition-duration", "1s");
      s.css("transform", "translateX(0%)");
    }, 0);
    s.append(e);
  }
}

$(document).ready(function () {
  let submit = $("button[type='submit']");
  // bắt sự kiện click vào nút Login
  submit.click(function () {
    event.preventDefault();
    var username = $("input[id='name']").val();
    var password = $("input[id='password']").val();
    const name = $("#name");
    const email = $("#email");
    console.log("name: ", username);
    console.log("email: ", email);
    console.log("password: ", password);
    const reg = /^\w+@[a-zA-Z]{3,}\.com$/i;

    if (!username) {
      $("#errorname").html("Wrong Name");
      name.css("boder-color", "#dc3545");
    } else {
      $("#errorname").html("");
    }
    if (reg.test(email) === false) {
      console.log(reg.test(email));
      $("#erroremail").html("Wrong Email");
      email.css("border-color", "#dc3545");
    } else {
      console.log(reg.test(email));
      $("#erroremail").html("");
    }
    if (password.length < 8) {
      $("#errorpass").html(" Password is at least 8 characters");
      password.css("border-color", "#dc3545");
    } else {
      $("#errorpass").html("");
    }

    // Lấy tất cả dữ liệu trong form login
    // var data = $('form#form').serialize();
    var postData = [{ username: "www", password: "1234" }];
    // Sử dụng $.ajax()
    $.ajax({
      type: "POST", //kiểu post
      url: "http://localhost:3001/api/login", //gửi dữ liệu sang trang http://localhost:3000
      data: { username: username, password: password },
      success: function (data) {
        alert("thành công");
      },
      error: function (data) {
        alert("thất bại");
      },
    });

    return false;
  });
});
