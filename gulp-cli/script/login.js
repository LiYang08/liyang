$('.submitBtn').mouseenter(function () { 
    $(this).css("background",'#005aaa');
});

$('.submitBtn').mouseleave(function () { 
    $(this).css("background",'#ddd');
});

$('#user').focus(function () { 
    $(this).css("borderColor",'#005aaa');
});
$('#user').blur(function () { 
    $(this).css("borderColor",'#dddddd');
});
$('#psw').focus(function () { 
    $(this).css("borderColor",'#005aaa');
});
$('#psw').blur(function () { 
    $(this).css("borderColor",'#dddddd');
});

$('.submitBtn').click(function(){
    $.ajax({
        type: "get",
        url: "http://localhost/workspace/liyang/gulp-cli/dist/data/user.php",
        data: {
            type:"login",
            user:$("#user").val(),
            pass:$("#psw").val()
        },
        dataType: "json",
        success: function (res) {
            if(res.err==1){
                open('../pages/index.html?status=1');
            }else{
                alert('账号或密码错误，请重新输入');
            }
            
        }
    });
  })

