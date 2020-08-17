$('#header').load('./header.html');
$('#footer').load('./footer.html');
(function(){
    var lefts = $1(".fd_left");
    var imgleftMin = $1(".fd_left img")
    var mask = $1('.mask');
    var maxBox = $1('.maxBox');
    var maxImg = $1('.maxBox img');
    lefts.onmouseenter = function(){
        maxImg.src=imgleftMin.src;
        mask.style.display = 'block'; //蒙板
        maxBox.style.display = 'block';//放大的图潘
    }
    //移入隐藏
    lefts.onmouseleave = function(){
        mask.style.display = 'none';
        maxBox.style.display = 'none';
    }
    //移入拖动
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
})();