
  //- 设置根元素fontSize~
  (function (doc, win) {
    var _root = doc.documentElement,
          resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
    function resizeFont () {
      var clientWidth = _root.clientWidth;
      _root.style.fontSize = (clientWidth/6.4) + 'px';
      //console.log('w:' + clientWidth );
    }
    win.addEventListener(resizeEvent, resizeFont, false);
    doc.addEventListener('DOMContentLoaded', resizeFont, false);
  })(document, window);
  