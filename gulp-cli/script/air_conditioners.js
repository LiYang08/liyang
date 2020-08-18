$('#header').load('./header.html');
$('#footer').load('./footer.html');
(function(){
    var lefts = $1(".fd_left");
    var imgleftMin = $1(".fd_left img")
    var mask = $1('.mask');
    var maxBox = $1('.maxBox');
    var maxImg = $1('.maxBox img');
    let $lb = $('.lbimg');
    let $w = $('.imgw')[0].clientWidth;
    let $srollw=0; 
    /* 总的内容宽度 */
    let imgCon = $('.imgbox').children('li').length*$w;
    /* 减去已经显示的宽度，为可位移宽度 */
    let moveMax = imgCon-$('.lbimg').width();
    lefts.onmouseenter = function(){
        maxImg.src=imgleftMin.src;
        mask.style.display = 'block'; /*蒙板*/
        maxBox.style.display = 'block';/*放大的图容器*/
    }
    /*移入隐藏*/
    lefts.onmouseleave = function(){
        mask.style.display = 'none';
        maxBox.style.display = 'none';
    }
    /*移入拖动*/
    lefts.onmousemove = function(ev){
        var e = ev || event;
        //获取mask的定位坐标，并让鼠标点居中
        //maskX maskY
        var maskX = e.clientX - offset(lefts,false).left - mask.clientWidth/2;
        var maskY = e.clientY - offset(lefts,false).top - mask.clientHeight/2+document.documentElement.scrollTop;
        //坐标点范围判断
        if(maskX <=0){
            maskX = 0;
        }
        if(maskX>=(lefts.clientWidth - mask.clientWidth)){
            maskX = lefts.clientWidth - mask.clientWidth;
        }
        if(maskY <=0){
            maskY = 0;
        }
        if(maskY>=(lefts.clientHeight - mask.clientHeight)){
            maskY= lefts.clientHeight - mask.clientHeight;
        }
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";
        //缩放比例
        
        var scaleX = maskX/(lefts.clientWidth - mask.clientWidth);
        var scaleY = maskY/(lefts.clientHeight - mask.clientHeight);
        var maxImgX = scaleX*(maxImg.clientWidth - maxBox.clientWidth)
        var maxImgY = scaleY*(maxImg.clientHeight - maxBox.clientHeight)
        maxImg.style.left = -maxImgX +"px";
        maxImg.style.top = -maxImgY + 'px';
    }
    /*点击左按键*/
    $('.btn-left').click(function(){
        $srollw+=$w;
        $('.btn-right').find('i').css('color','#333333');
        if($srollw>=moveMax){
          $srollw=moveMax;
          $(this).find('i').css('color','#999999');
        }
        $('.lbimg').scrollLeft($srollw);
    });
    /*点击右键*/
    $('.btn-right').click(function(){
        $srollw-=$w;
        $('.btn-left').find('i').css('color','#333333');
        if($srollw<=0){
            $srollw=0;
            $(this).find('i').css('color','#999999');
        }
        $('.lbimg').scrollLeft($srollw);
    });
    /* 鼠标移入图片 */
    $('.imgbox').on('mouseenter','li img', function () {
        let $li = $(this);
        let index = $li.parent().index();
        $li.parent('.imgbox li').siblings().find('img').css('border','1px solid #cccccc');
        $li.css('border','1px solid #0c5ca8');
        /* ../image/fd1-1.webp */
        $('.fd_left').find('img').attr("src",`../image/fd${index}-2.webp `)
    });
})();

/* 处理页面URL */
(function(){
    var devs =dealUrl(location.href);
    function dealUrl(url) { 
        let arr3 =null;
        let arr1 = url.split("?")[1];
        let arr2 = arr1.split("=")[1];
        let res = arr2.indexOf('#');
        if(res !== -1){
           arr3 = arr2.split("#")[0];
           arr2 = false;
        }
        return arr2 || arr3;
    }
    $.ajax({
        type: "get",
        url: "../data/showair.json",
        data: "",
        dataType: "json",
        success: function (json) {
            var obj =null;
            json.forEach(item => {
                json= json.filter(item =>item.id == devs)
            });
            obj = json[0];
            $('.product_right>p').text(obj.tit); 
            $('.product_right>span').text(obj.kfr); 
            $('.ckj_priceP em').text(obj.price); 
        }
    });

})()
/* url处理完成*/