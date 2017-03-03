$(function(){
	var $ali = $('#main .main-menu li')
	$ali.on('click',function(){
		var index = $(this).index();
			
			$(this).addClass('selected').siblings().removeClass('selected');
			$('#main .main-menu ul').animate({left:-166},2000);
			$('#main-content0').animate({left:186},2000);
			if(index!=0){
				$("#main-content0").siblings().css({
					opacity:1
				});
				$("#main-content"+index+'').stop().animate({
						left:666,
						opacity: 1
						}, 2000).siblings().stop().animate({

					left:186,
					opacity:0
				},2000);
			}else if(index == 0){
				$("#main-content0").stop().animate({
						left:352
						// opacity: 1
					}, 2000).siblings().animate({

					// left:0,
					opacity:0
				},2000);
				$('#main .main-menu ul').stop().animate({
					left:0
					},2000);
				
			}
			

			
		
	});
	//#main-content0换肤
	$(function(){
			$('#skin li').on('click',function(){
				$('#'+this.id+'').addClass('selected').siblings().removeClass('selected');
				// $('.news-title ')
				$('#cssfile').attr('href',"css/skin/"+ this.id +".css");
				});
		
		});
	//main-content1-content放大镜
	$('.main-content1-content').each(function(){
		this.left = this.offsetLeft;
		this.top = this.offsetTop;
		$(this).css({
			left: this.offsetLeft,
			top: this.offsetTop
		}).css('position','absolute').hover(function(){
				$(this).stop().animate({
					width: this.offsetWidth + 40,
					height: this.offsetHeight + 40,
					left: this.offsetLeft - 20,
					top: this.offsetTop - 20
				}).css({
					background:'#fff'
				});
				// this.style.zIndex++;
			},function(){
				$(this).stop().animate({
					width: 340,
					height: 157,
					left: this.left,
					top: this.top
				}).css({
					backgroundImage:'url(img/bg2.png) no-repeat',
					backgroundColor:'#F4F4F4'
				});
				// this.style.zIndex--;
			})

	});

	setTimeout(function(){
				$('#maskmask').fadeOut();
			},1000);
	
	//	1自定义滚动条
		var oMaincontent1 = document.getElementById('main-content1');
		var oMaincontentone = document.getElementById('main-content1-onecontent');
		var oScrollBtn = document.getElementById('scroll-btn');
		oScrollBtn.onmousedown = function(e){
			e = e || window.event;
			var iDisY = e.clientY - oScrollBtn.offsetTop;
			document.onmousemove = function(e){
			e = e || window.event;
				var iTop = e.clientY - iDisY;
				if(iTop < 0){
					iTop = 0;
				}
				if(iTop > oMaincontent1.offsetHeight - oScrollBtn.offsetHeight){
					iTop = oMaincontent1.offsetHeight - oScrollBtn.offsetHeight
				}
				var fScale = iTop /(oMaincontent1.offsetHeight - oScrollBtn.offsetHeight);
				oScrollBtn.style.top = iTop + 'px';

				oMaincontentone.style.top = -(oMaincontentone.offsetHeight-oMaincontent1.offsetHeight) * fScale +'px';
				return false;
			};
			document.onmouseup = function(){
				document.onmousemove = null;
			};
			
		};
		//remuse轮播图

		$('.main-content-info-play li').on('mouseover',function(){
			var index1 = $('.main-content-info-play li').index(this);
			var $div = $('.main-content-info-container >div');
			$(this).addClass('selected').siblings().removeClass('selected');
			// $div.eq($index).addClass('selected').siblings().removeClass('selected');
			showDiv(index1);
			return false;
		});
		function showDiv(idx){
			var idx =0;
			var $Div = $('.main-content-info-container');
			var rollWidth = $Div.find('.selected').outerWidth();
			$('.main-content-info-container >div').eq(idx).stop().animate({left:-rollWidth*idx},1000);
		}
	//	contact自定义滚动条
		var oMaincontent5 = document.getElementById('main-content5');
		var oMaincontent5one = document.getElementById('main-content5-onecontent');
		var oScrollBtn5 = document.getElementById('scroll-btn5');
		oScrollBtn5.onmousedown = function(e){
			e = e || window.event;
			var iDisY5 = e.clientY - oScrollBtn5.offsetTop;
			document.onmousemove = function(e){
			e = e || window.event;
				var iTop5 = e.clientY - iDisY5;
				if(iTop5 < 0){
					iTop5 = 0;
				}
				if(iTop5 > oMaincontent5.offsetHeight - oScrollBtn5.offsetHeight){
					iTop5 = oMaincontent5.offsetHeight - oScrollBtn5.offsetHeight
				}
				var fScale5 = iTop5 /(oMaincontent5.offsetHeight - oScrollBtn5.offsetHeight);
				oScrollBtn5.style.top = iTop5 + 'px';

				oMaincontent5one.style.top = -(oMaincontent5one.offsetHeight-oMaincontent5.offsetHeight) * fScale5 +'px';
				return false;
			};
			document.onmouseup = function(){
				document.onmousemove = null;
			};
			
		};

		//send btn
		// $('#btn').hover(function(){
		//  $(this).animate({
		//  	css("background",'#aaa')
		//  },1000);
		// },function(){
		//  $(this).css('background','#08AEAC');

		// });














});