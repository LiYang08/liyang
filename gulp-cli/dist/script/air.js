$('#header').load('./header.html');
let obj=null;
var worker = new Worker("../script/devWorker.js");
worker.postMessage({
    type:"dev"
});
worker.onmessage = function (e) { 
    obj = e.data;
    loadDevType(obj);
}
function loadDevType(obj) { 
    console.log('worker能用了');
}

/* 处理其他选项变色 */
$(".other_tit_show").on("mouseenter",".selp",function (e) {
    let $li = $(this);
    /* 文字样式 */
    $li.addClass("changeSpan");
    $li.siblings('span').removeClass("changeSpan");
    /* 角变化 */
    $li.children(".air_sel_up").css('display','block');
    $li.children(".air_sel_down").css('display','none');
    /* 清除其他span角的样式 */
    $li.siblings('span').children('.air_sel_down').css('display','block');
    $li.siblings('span').children('.air_sel_up').css('display','none');
    /* 详细内容 */
    let index = $(".other_tit_show").children("span").index($li);
    if(index == -1)rerurn;
    $(".other_list_show").css('display','block');
    let showLi = $(".other_list_show").children()[index];
    $(showLi).css('display','block');
    $(showLi).siblings('li').css('display',"none");
});

$(".other_tit_show").on("mouseleave",function (e) {
    $(".other_list_show").css('display','none'); 
    $(".other_tit_show").children("span").removeClass("changeSpan");
    $(".other_tit_show").find('.air_sel_down').css('display','block');
    $(".other_tit_show").find('.air_sel_up').css('display','none');
});