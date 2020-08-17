/* 加载头部 */
$('#header').load('./header.html');
/* 加载尾部 */
$('#footer').load('./footer.html');

/* 全局变量 */
/* 最高价 最低价 */
var arrPrice=[];
var arrClass=[]; 
var attrprop='';
var revbool = undefined;
/* 解析URL */
var devs = dealUrl(location.href);
$('.receive_dev').text(devs);
function dealUrl(url) { 
    let arr1 = url.split("?")[1];
    let arr2 = arr1.split("=")[1];
    let arr3 = arr2.split("#")[0];
    switch(arr3){
        case "air":
        return "空调";
    }
 }
$('.device').text($('.receive_dev').text());
/* url处理完成*/

/* 增加线程处理ajax */
showImage();
function showImage(attr,rev,arr,arr1){
    let attrs = attr ||"";
    let revs = rev; 
    let arrz = arr || null;
    let arr2 = arr1;
    let worker = new Worker("../data/devWorker.js");
    worker.postMessage({
        type:"dev",
        attr:attrs,
        rev:revs,
        arrs:arrz,
        arrp:arr2
    });
    worker.onmessage = function (e) { 
        $('.loaddata').html('');
        let domStr = e.data[0];
        $('.devNum').text(e.data[1]);
        $('.loaddata').append(domStr);
    }
}
/* 线程关闭 */

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


/* dev_active 背景图变换 */
/* 智慧家电  活动精选  已下市 */
$(".dev_active").on('click','span', function () {
    let $span = $(this);
    $span.toggleClass("show_ok");
    $.each($(".dev_active span"), function (index, value) { 
        if($(value).hasClass('show_ok')){
            switch(index){
                case 0:
                    if(arrClass.indexOf('smart')!=-1)break;
                    arrClass.push('smart');
                    break;
                case 1:
                    if(arrClass.indexOf('jx')!=-1) break;
                    arrClass.push('jx');
                    break; 
                case 2:
                    if(arrClass.indexOf('over')!=-1) break;
                    arrClass.push('over');
                    break;  
            }
        }else{
            switch(index){
                case 0:
                    var zb = arrClass.indexOf('smart')
                    if(zb!=-1){
                        arrClass.splice(zb,1);
                    }
                    break;
                case 1:
                    var zb = arrClass.indexOf('jx')
                    if(zb!=-1){
                        arrClass.splice(zb,1);
                    }
                    break; 
                case 2:
                    var zb = arrClass.indexOf('over')
                    if(zb!=-1){
                        arrClass.splice(zb,1);
                    }
                    break;  
            }
        }
    });
    showImage(attrprop,revbool,arrClass);
});


/* 处理点击样式切换 其余样式消失*/
/* 综合 价格 人气 热度排序 */
$('.all_list').on('click','li',function (){
    let $li = $(this);
    let str = $li.text();
    str = $.trim(str);
    $li.children("i").toggleClass("hd_l");
    $li.addClass('libg');
    $li.siblings().removeClass("libg");
    $li.siblings().children("i").toggleClass("hd_l");
    revbool = Boolean(Number($('.hd_l').attr('type')));
    switch(str){
        case '上市时间':
            attrprop='listed';
            showImage(attrprop,revbool,arrClass,arrPrice);
            break;
        case '人气':
            attrprop='hot';
            showImage(attrprop,revbool,arrClass,arrPrice);
            break;
        case '价格':
            attrprop='price';
            showImage(attrprop,revbool,arrClass,arrPrice);
            break;
        default:
            showImage();
    } 
});
/* 价格区间筛选 */
$('.price_search').on("click",'.price_btn button',function () {
    $btn = $(this);
    if($btn.hasClass('qk')){
        $('#lowPrice').val('');
        $('#heightPrice').val('');
        showImage(attrprop,revbool,arrClass);
    }else if($btn.hasClass('ok')){
        var priceMin = $('#lowPrice').val()||false;
        var priceMax = $('#heightPrice').val()||false;
        arrPrice=[priceMin,priceMax];
        showImage(attrprop,revbool,arrClass,arrPrice);
        $('.price_search').css('display','none');
    }
});

$('.prcie_range').on("mouseenter",function () {
    $('.price_search').css('display','block');
});
$('.prcie_range').on("mouseleave",function () {
    $('.price_search').css('display','none');
});



