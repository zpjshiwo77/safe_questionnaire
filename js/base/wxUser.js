$(function () {
    var data = { url: location.href.split('#')[0] };
    data.url = encodeURIComponent(data.url);

    console.log("jsdk")
    var hrefs = window.location.href.split('?');
    var siteUrl = hrefs[0].substr(0, hrefs[0].lastIndexOf('/') + 1);

    $.getJSON('//validation.energytrust.com.cn/index.php/Admin/Wx/ajaxWxqm?jsonpcallback=?', data, function (res) {
        wx.config({
            debug: 0,
            appId: res.appId,
            timestamp: res.timestamp,
            nonceStr: res.wxnonceStr,
            signature: res.wsSha1,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        })
        window.wxData = {
            title: '答题有奖，最高8888！',
            desc: '这可能是你做过的，获益最多的一套题',
            link: siteUrl,
            imgUrl: siteUrl + 'images/share.jpg' + Math.random(),
            type: 'link',
            success: function () { },
            cancel: function () { }
        }
        window.wxDataTiemline = {
            title: '这可能是你做过的，获益最多的一套题',
            link: siteUrl,
            imgUrl: siteUrl + 'images/share.jpg' + Math.random(),
            type: 'link',
            success: function () { },
            cancel: function () { }
        }
        wx.ready(function () {
            wx.onMenuShareAppMessage(wxData);
            wx.onMenuShareTimeline(wxDataTiemline);
        });
    });
});
