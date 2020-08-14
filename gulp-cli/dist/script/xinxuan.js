$(".xx_tab").on("click","li", function () {
    let $li = $(this);
    let index = $li.index();
    let $span = $li.find('span');
    $span.css({
        'border-bottom':'6px solid #005aaa',
         color:"#005aaa"
    });
    $li.siblings('li').find('span').css({
        'border-bottom':'6px solid #ffffff',
         color:"#444444"
    });
    $.ajax({
        type: "get",
        url: "../data/xinxuan.json",
        data: "data",
        dataType: "json",
        success: function (res) {
            let arr = res[index];
            $(".xx_product").html('');
            var xxDom = `<div class="pro_1">
            <div class="pro_1_img">
                <a href="./xinxuan_jx.html" target="_blank">
                    <img src="${arr[0].src}" alt="">
                </a>
            </div>
            <div class="img_msg"><a href="./xinxuan_jx.html" target="_blank">${arr[0].msg}</a></div>
            <div class="img_type"><a href="./xinxuan_jx.html" target="_blank">${arr[0].type}</a></div>
        </div>
        <div class="pro_2">
            <div class="pro_2_top">
                <div class="pro_2_img">
                    <a href="./xinxuan_jx.html" target="_blank">
                        <img src="${arr[1].src}" alt="">
                    </a>
                </div>
                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">${arr[1].msg}</a></div>
                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">${arr[1].type}</a></div>
            </div>
            <div class="pro_2_bto">
                <div class="pro_2_img">
                    <a href="./xinxuan_jx.html" target="_blank">
                        <img src="${arr[2].src}" alt="">
                    </a>
                </div>
                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">${arr[2].msg}</a></div>
                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">${arr[2].type}</a></div>
            </div>
        </div>
        <div class="pro_3">
            <div class="pro_3_top">
                <div class="pro_2_img">
                    <a href="./xinxuan_jx.html" target="_blank">
                        <img src="${arr[3].src}" alt="">
                    </a>
                </div>
                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">${arr[3].msg}</a></div>
                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">${arr[3].type}</a></div>
            </div>
            <div class="pro_3_bto">
                <div class="pro_2_img">
                    <a href="./xinxuan_jx.html" target="_blank">
                        <img src="${arr[4].src}" alt="">
                    </a>
                </div>
                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">${arr[4].msg}</a></div>
                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">${arr[4].type}</a></div>
            </div>
        </div>`;
        $(".xx_product").append(xxDom);
        }
    });
});