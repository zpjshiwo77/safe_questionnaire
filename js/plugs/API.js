var API = new importAPI();

function importAPI () {
	var _self = this;

	var requestDomain = "http://wechat.dhteam.net/actapi/api/SysConfig/AddUnionPay";
	var loadBox=$('aside.loadBox');

	function _Ajax(opts){
	    icom.fadeIn(loadBox);
	    var type = opts.type || "POST";
	    $.ajax({
	        type: type,
	        url: requestDomain + opts.API,
	        dataType: 'json',
	        async: true,
	        data: opts.data,
	        success: function(data){
	        	icom.fadeOut(loadBox);
                if (opts.onSuccess) opts.onSuccess(data);
	        },
	        error: function(){
	        	icom.alert("网络可能存在问题，请刷新试试！");
	        }
	    });
	}

	/**
     * 发送填写的信息
     * @param {*} data 数据
     * @param {*} onSuccess 回调函数
     */
	_self.sendInfo = function(data,onSuccess){
		_Ajax({
            API:"",
            data:data,
            onSuccess:onSuccess
        });
    }//end func
}//end import