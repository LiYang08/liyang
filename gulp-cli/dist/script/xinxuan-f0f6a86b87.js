"use strict";$(".xx_tab").on("click","li",function(){var a=$(this),i=a.index();a.find("span").css({"border-bottom":"6px solid #005aaa",color:"#005aaa"}),a.siblings("li").find("span").css({"border-bottom":"6px solid #ffffff",color:"#444444"}),$.ajax({type:"get",url:"../data/xinxuan.json",data:"data",dataType:"json",success:function(a){var n=a[i];$(".xx_product").html("");var t='<div class="pro_1">\n            <div class="pro_1_img">\n                <a href="./xinxuan_jx.html" target="_blank">\n                    <img src="'.concat(n[0].src,'" alt="">\n                </a>\n            </div>\n            <div class="img_msg"><a href="./xinxuan_jx.html" target="_blank">').concat(n[0].msg,'</a></div>\n            <div class="img_type"><a href="./xinxuan_jx.html" target="_blank">').concat(n[0].type,'</a></div>\n        </div>\n        <div class="pro_2">\n            <div class="pro_2_top">\n                <div class="pro_2_img">\n                    <a href="./xinxuan_jx.html" target="_blank">\n                        <img src="').concat(n[1].src,'" alt="">\n                    </a>\n                </div>\n                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[1].msg,'</a></div>\n                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[1].type,'</a></div>\n            </div>\n            <div class="pro_2_bto">\n                <div class="pro_2_img">\n                    <a href="./xinxuan_jx.html" target="_blank">\n                        <img src="').concat(n[2].src,'" alt="">\n                    </a>\n                </div>\n                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[2].msg,'</a></div>\n                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[2].type,'</a></div>\n            </div>\n        </div>\n        <div class="pro_3">\n            <div class="pro_3_top">\n                <div class="pro_2_img">\n                    <a href="./xinxuan_jx.html" target="_blank">\n                        <img src="').concat(n[3].src,'" alt="">\n                    </a>\n                </div>\n                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[3].msg,'</a></div>\n                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[3].type,'</a></div>\n            </div>\n            <div class="pro_3_bto">\n                <div class="pro_2_img">\n                    <a href="./xinxuan_jx.html" target="_blank">\n                        <img src="').concat(n[4].src,'" alt="">\n                    </a>\n                </div>\n                <div class="img_msg_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[4].msg,'</a></div>\n                <div class="img_type_2"><a href="./xinxuan_jx.html" target="_blank">').concat(n[4].type,"</a></div>\n            </div>\n        </div>");$(".xx_product").append(t)}})});