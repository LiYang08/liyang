self.onmessage = function (e){
    if(e.data.type == 'dev'){
        var arrName = e.data.arrs;
        var arrPrice = e.data.arrp || [];
        var xhr = new this.XMLHttpRequest();
        xhr.open('get','../data/showair.json');
        xhr.send(null);
        xhr.onreadystatechange = function (){
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              var json = JSON.parse(xhr.responseText);
              /* sort */
              if(e.data.attr){
                json = json.sort(prop(e.data.attr,e.data.rev));
              }
              if(arrName!=null && arrName.length>0){
                arrName.forEach(prev => {
                  json.forEach(item=>{
                    json = json.filter(item => item[prev]===true)
                  })
                });
              }
              if(arrPrice.length>0){
                if(arrPrice[0]&&arrPrice[1]){
                    json.forEach(item=>{
                      json = json.filter(item => item.price>=Number(arrPrice[0])&&item.price<=Number(arrPrice[1]));
                    });
                   
                }else if(!arrPrice[0]&&arrPrice[1]){
                  json.forEach(item=>{
                     json = json.filter(item => item.price<=Number(arrPrice[1]));
                  });
                }else{
                  json.forEach(item=>{
                    json = json.filter(item => item.price>=Number(arrPrice[0]));
                 });
                }
              }
              var str = "";
              if(json.length>0){
                json.forEach(item => {
                  str += `<li>
                    <div class="databox" over=${item.over}>
                       <a href="./air_conditioners.html" class="imgbox" target="_blank" id=${item.id}><img src="${item.src}" alt=""></a>
                       <div class="textbox">
                         <a href="./air_conditioners.html" class="ink_base" target="_blank">${item.tit}</a>
                         <p>${item.kfr}</p>
                       </div>
                        <p class="jiage">参考价:<b>${item.price}</b></p>
                        <p class="Interaction"><a href="#">0</a>家电商在售 <i class="iconfont icon-redu"></i><a href="#" class="hot">${item.hot}</a></p>
                    </div>
                  </li> `;
                });
              }else{
                str+=`<li class="noRes">
                  <img src="../image/noRes.webp" alt="">
                  <p>抱歉，没有找到相关产品</p>
                </li>`;
              }
              var len = json.length; 
              self.postMessage([str,len]);
              self.close();
            } else {
              self.postMessage({err: 0,msg: '登录失败'});
              self.close();
            }
          }
        }
    }
}

/**数组根据数组对象中的某个属性值进行排序的方法 
     * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
     * @param attr 排序的属性 如number属性
     * @param rev true表示升序排列，false降序排序
* */
function prop(attr,rev){
  //第二个参数没有传递 默认升序排列
  if(rev ==  undefined){
      rev = 1;
  }else{
      rev = (rev) ? 1 : -1;
  }
  
  return function(a,b){
      a = a[attr];
      b = b[attr];
      if(a < b){
          return rev * -1;
      }
      if(a > b){
          return rev * 1;
      }
      return 0;
  }
}


