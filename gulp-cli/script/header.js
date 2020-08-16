/* 数据加载 */
$('.dist_a').on("mouseenter","a" ,function () {
    $('.cate_con').html('');
    let $a = $(this).index();
    var cateDom='';
    $('.category_li2').css('display','block');
    $.ajax({
        type: "get",
        url: "../data/header.json",
        data: "data",
        dataType: "json",
        success: function (response) {
            const obj = response[$a];
            for(var key in obj){
            cateDom += `<div class="cate_case">
                <h3>${key}</h3>
                <ul class="cate_menu clearBoth">`;
                var arr = obj[key];
                arr.forEach(item => {
                    cateDom +=`<li><a href="#">${item}</a></li>`;
                });
                cateDom +=`</ul></div>`;
            }
           $('.cate_con').append(cateDom);
            let $h =$(".cate_con").height();
            if($h>200){
                $(".cate_img").css('display','none');
            }else{
                $(".cate_img").css('display','block');
            }
        }
    });
});
/* input 获取焦点*/
$("#inp_s").focus(function(){
    $(this).css("border","1px solid #c8c8c8");
});
$("#inp_s").blur(function(){
    $(this).css("border","1px solid #ffffff");
});

/* 页面跳转 air */
$('#skip').click(function () { 
    if($('#inp_s').val()==='') $('#inp_s').val('独立除湿空调');
    var str = $('#inp_s').val();
    if(str.indexOf('空调')!=-1){
        var keyword = "air";
    }else {
        alert('查询到此商品！');
    }
    open('./air.html?device='+keyword);
})
