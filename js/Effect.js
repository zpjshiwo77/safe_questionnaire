$(function () {
    "use strict";
    $(".question ul li").each(function () {
        $(this).click(function () {

                if ($(this).has("input").length > 0 && $(this).find(".RMH").length > 0) {
                    if ($(this).find(".RMH").val() == "") {
                        $(this).removeClass("cur");
                        $(this).find('.checkBox').prop("checked", false);
                        $(this).find('.checkBox').attr("checked", false);
                    } else {
                        if ($(this).hasClass("cur")) {
                            $(this).find('.checkBox').prop("checked", true);
                            $(this).find('.checkBox').attr("checked", true);
                        } else {
                            $(this).find('.checkBox').prop("checked", true);
                            $(this).find('.checkBox').attr("checked", true);
                            $(this).addClass("cur");
                        }
                    }
                } else {


                    if ($(this).hasClass("cur")) {
                       
                        $(this).removeClass("cur");
                        $(this).find('.checkBox').prop("checked", false);
                        $(this).find('.checkBox').attr("checked", false);

                    } else {

                        $(this).addClass("cur");

                        $(this).find('.checkBox').prop("checked", true);
                        $(this).find('.checkBox').attr("checked", true);
                    }

                    
                }

        })
    });
   

    $(".container input").bind("blur", function () {
        $("body").scrollTop(0);
    });
    $(".container textarea").bind("blur", function () {
        $("body").scrollTop(0);
    });
    //分享
    $(document).Share({
        //分享标题
        title: ["100元话费免费送！给点意见就能领～"],
        //分享描述
        desc: "答题有礼，就等你来！",
        //分享配图
        sharePic: ["http://wechat.dhteam.net/vwxmql/share1.jpg"],
        //分享地址
        shareLink: [location.href],
        //分享接口（如需要）
        shareApi: "http://wechat.dhteam.net/unionpay/webajax/wxshare.ashx",
    });



    function itemList_check(itemList) {
        debugger;
        if (itemList.type != "checkbox") {
            $(itemList).find(":checkbox").click(function () {
                itemList.stopPropagation();
            });
        }
        else {
            var m = $(itemList).attr("index_item");
            var checkAll = $(itemList).is(':checked');
            alert(checkAll);
            if (checkAll) {
                data[m].AffairReciveType = 1;
                alert("选择");
                return;
            }
            else {
                //data[m].AffairReciveType = 0;
                alert("不选择");
            }
        }

    }
});
