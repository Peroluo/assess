class wxShare {
  constructor({ title, desc, link, imgUrl, jsUrl, wxConfig, success }) {
    this.loadScript(jsUrl, () => {
      wxConfig.jsApiList = [
        'onMenuShareAppMessage',
        'onMenuShareTimeline',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
      ];
      const wx = window.wx;
      wx.config(wxConfig);
      wx.error(function(res) {});
      const share = {
        title,
        desc,
        link,
        imgUrl,
        success,
        cancel: function() {},
      };
      wx.ready(function() {
        wx.onMenuShareAppMessage(share);
        wx.onMenuShareTimeline(share);
        wx.onMenuShareQQ(share);
        wx.onMenuShareWeibo(share);
        wx.onMenuShareQZone(share);
      });
    });
  }
  loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 'async';
    script.src = url;
    document.body.appendChild(script);
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === 'complete' || script.readyState === 'loaded') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function() {
        callback();
      };
    }
  }
}
export default wxShare;
