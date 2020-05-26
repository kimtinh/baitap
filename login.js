$(document).ready (function (){
    let submit = $("button[type='submit']");
    // bắt sự kiện click vào nút Login
    submit.click(function()
    {
        var username = $("input[id='name']").val();
        var password = $("input[id='password']").val();
         
        if (username == '') {
            alert('Vui lòng nhập tài khoản');
            return false;
        }
         
        if (password == '') {
            alert('Vui lòng nhập mật khẩu');
            return false;
        }
         
        // Lấy tất cả dữ liệu trong form login
        // var data = $('form#form').serialize();
        var postData = [{"username": "www", "password" :"1234"}];
        // Sử dụng $.ajax()
        $.ajax({
        type : 'POST', //kiểu post
        url  : 'http://localhost:3001/api/login', //gửi dữ liệu sang trang http://localhost:3000
        data : {username: username, password: password},
        success :  function(data)
               {
                    alert('thành công');
               },
        error: function(data) {
            alert('thất bại');
        }
        });

        return false;
    });
});