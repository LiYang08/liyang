self.onmessage = function (e){
    if(e.data.type == 'dev'){
        var xhr = new this.XMLHttpRequest();
        xhr.open('get','../data/devStyle.json');
        xhr.send(null);
        xhr.onreadystatechange = function (){
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              var json = JSON.parse(xhr.responseText);
              self.postMessage(json);
              self.close();
            } else {
              self.postMessage({err: 0,msg: '登录失败'});
              self.close();
            }
          }
        }
    }
}



