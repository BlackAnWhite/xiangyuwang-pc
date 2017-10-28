//nav切换
$(document).ready(function(){
	$('nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
});

//修改密码  手机号

	function showBox (id) {
		var box=document.getElementById(id);
		var bg_filter=document.getElementById("bg_filter");
		box.style.display="block";
		bg_filter.style.display="block";

	};

	function closeBox (id1,id2) {
		var box1=document.getElementById(id1);
		var bg_filter=document.getElementById("bg_filter");

		if(id2){
			var box2=document.getElementById(id2);
			box2.style.display="none";
		}

		bg_filter.style.display="none";
		box1.style.display="none";


	};


//banner
$(document).ready(function (){
	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
		},function(){
		$("#btn_prev,#btn_next").fadeOut()
		})
	$dragBln = false;
	$(".main_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e) {
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	})
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	})
	$(".main_image a").click(function() {
		if($dragBln) {
			return false;
		}
	})
	timer = setInterval(function() { $("#btn_next").click();}, 4000);
	$(".main_visual").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() { $("#btn_next").click();}, 4000);
	})
	$(".main_image").bind("touchstart", function() {
		clearInterval(timer);
	}).bind("touchend", function() {
		timer = setInterval(function() { $("#btn_next").click();}, 4000);
	})
});



//爱情圈列表点击关闭
$(document).ready(function(){
	$('.love-list-close').click(function(){
		$(this).parent().parent('.love-list').hide('fast');
	});
});

//消息中心点击关闭
$(document).ready(function(){
	$('.msg-off').click(function(){
		$(this).parent().parent().parent('.msg-box').hide('fast');
	});
});


//图片预览
$(document).ready(function(){
	try{
		 $('.showbigimg img').fsgallery()
	}catch(e){};

});

//取消好感 取消委托
$(document).ready(function(){
	$('.msg-remove').click(function(){
		$(this).parent().addClass('dn');
	});
});

//点赞 评论 有好感
$(document).ready(function(){
	$('.love-list-bottom li .icon-dianzan').click(function(){
		$(this).parent().addClass('colore83828');
	});
});
$(document).ready(function(){
	$('.love-list-bottom li .icon-xin').click(function(){
		$(this).parent().toggleClass('colore83828');
	});
});

$(document).ready(function(){
	$('.love-list-bottom li .icon-xiaoxizhongxin').click(function(){
		$(this).parents('.love-list').children('.commentbox').toggle('fast');
	});
});

$(document).ready(function(){
	$('.cmt-off').click(function(){
		$(this).parents('.commentbox').hide('fast');
	});
});

//点击展开全文显示全部
function show(){
	  var box = document.getElementsByClassName("love-list-txtbox");

	  for(var i= 0 ; i < box.length ; i++){
	  		(function(i){
	  			var text = box[i].innerHTML;
			    var newBox = document.createElement("div");
			    var btn = document.createElement("span");
			    newBox.innerHTML = text.substring(0,124);
			    btn.innerHTML = text.length > 124 ? "显示全文" : "";
			    box[i].innerHTML = "";
			    box[i].appendChild(newBox);
			    box[i].appendChild(btn);
			    btn.onclick = function(){
				    if(this.innerHTML == "显示全文"){
				      this.innerHTML = "收起全文";
				      this.parentNode.children[0].innerHTML = text;
				    }
				    else{
				      this.innerHTML = "显示全文";
				      this.parentNode.children[0].innerHTML = text.substring(0,124);
				    }
			    }
	  		})(i);

	  }
	}
window.onload=function(){
  show();
};


//点击回复弹出输入框
$(document).ready(function(){
	$('.Ask').click(function(){
		layer.prompt({
			title: '回复',
			formType: 2,
			 btn: ['回复', '取消']
		},function(text, index){
			  layer.close(index);
			  layer.msg('回复成功！');
		});
	});
});


//个人资料发消息  有好感  委托红娘
$(document).ready(function(){
	$('.gtb-hello').click(function(){
		layer.prompt({
			title: '发消息',
			formType: 2,
			 btn: ['发消息', '取消']
		},function(text, index){
			  layer.close(index);
			  layer.msg('发送成功！');
		});
	});

	$('.gtb-haogan,.gtb-weituo').click(function(){
		$(this).toggleClass('active');
	});

});

//条件搜索点击变色
function charLength(str){
	return str.replace(/(^\s*)|(\s*$)/g,'').length;
}
$(document).ready(function(){
	try{
		$('.mobi-select input').change(function(){
			var val = $(this).val();
			if (val) {
				$(this).parent().parent().css('background','#E83828');
				$(this).css('color','#fff');
			}
		});
	}catch(e){};

	try{
		$('.mobi-select select').change(function(){
			var val = $(this).val();

			if (val>0 || val<0 || charLength(val) > 2) {
				$(this).parent().parent().css('background','#E83828');
				$(this).parent().children().css('color','#fff');
			}
			if(!val){
				$(this).parent().parent().css('background','#ddd');
				$(this).parent().children().css('color','#666');
			}
		});
	}catch(e){};

	var flag = false,inputElem = null;
	$('.mobi-address').click(function(){
		flag = true;
		inputElem = $(this).find('input');
	});
	$(document).delegate('.mbsc-fr-btn0','click',function(e){
		if(flag){
			inputElem.parent().parent().css('background', '#E83828');
			inputElem.parent().children().css('color', '#fff');
			inputElem = null;
		}
	});

});

//搜索页插入城市数据
$(document).ready(function(){
	try{
		$('.address-work,.address-birth').showCity(city2);
	}catch(e){};

});


//个人资料页插入城市数据
$(document).ready(function(){
	try{
		$('.per-address-work,.per-address-birth').showCity(city);
	}catch(e){};

});
