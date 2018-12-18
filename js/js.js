window.onload=function(){
	function gets(n){
		var a=document.querySelectorAll(n);
		if(a.length==1){
			return a[0]
		}else{
			return a
		}
	}
	window.onscroll=function(){
		var nav=gets(".nav");
		if(document.documentElement.scrollTop>nav.offsetHeight){
			nav.style.position = 'fixed'
		}else if(document.documentElement.scrollTop<nav.offsetHeight){
			nav.style.position = 'relative'
		}
	}
	//新闻资讯轮播图
	var mul=gets(".mkb ul");
	var lilist=gets(".mkb li");
	var wli=lilist[0].offsetWidth;
	mul.style.width=lilist.length*wli+20*(lilist.length-1)+"px";
	var malist=gets(".mb a");
	var boxw=gets(".mkb").offsetWidth;
	var a=0;
	//点击上一批
	malist[0].onclick=function(){
		a--;
		if(a>=0){
			this.style.display = "inline-block"
			malist[1].style.display = "inline-block"
			var timeid=setInterval(function(){
				var ull=parseInt(mul.style.left);
				if(ull==-a*(boxw+20)){
					clearInterval(timeid);
					return
				}
				mul.style.left=ull+40+"px"
			},17)
			if(a==0){
				this.style.display = "none"
			}
		}
	}
	//点击下一批
	malist[1].onclick=function(){
		a++;
		if(a<3){
			this.style.display="inline-block";
			malist[0].style.display="inline-block";
			var timeid=setInterval(function(){
				var ull=parseInt(mul.style.left);
				if(ull==-a*(boxw+20)){
					clearInterval(timeid);
					return
				}
				mul.style.left=ull-40+"px"
			},17)
			if(a==2){
				this.style.display="none"
			}
		}else{
			a=0;
			if(a==0){
				malist[0].style.display="none";
				this.style.display="inline-block";
			}
			var timeid=setInterval(function(){
				var ull=parseInt(mul.style.left);
				if(ull>=0){
					clearInterval(timeid);
					return
				}
				mul.style.left=ull+40*2+"px"
			},17)
		}
	}
	//自动轮播
	var auto=setInterval(function(){
		malist[1].click();
	},3000)
	gets(".mkb").onmouseenter=function(){
		clearInterval(auto)
	}
	gets(".mkb").onmouseleave=function(){
		auto=setInterval(function(){
			malist[1].click();
		},3000)
	}
	var atop=gets(".tab .top a");
	var bk=gets(".bk");
	var spant=gets(".top span")
	$(atop).click(function(){
		$(bk).toggle()
	})
	// for(var i=0;i<atop.length;i++){
	// 	atop[i].setAttribute("index",i);
	// 	atop[i].onclick=function(){
	// 		var a=0;
	// 		var index=this.getAttribute("index");
	// 		for(var j=0;j<atop.length;j++){
	// 			bk[j].style.display="none";
	// 			atop[j].id="";
	// 			spant[j].id=""
	// 		}
	// 		var tim=setInterval(function(){
	// 			a++;
	// 			if(a>40){
	// 				clearInterval(tim)
	// 			}
	// 			bk[index].style.opacity=a/40
	// 		},17)
	// 		bk[index].style.display="block";
	// 		atop[index].id="hover";
	// 		spant[index].id="span"
	// 	}
	// }
	//所有式神列表点击
	$(".shen").click(function(){
		$(this).hide();
		$(".bigimg").hide();
		$(".rbb").fadeIn();
	});
	//式神列表
	var ul=gets(".all ul");
	var all=gets(".all");
	var sr=gets(".sr");
	var srul=gets(".sr ul");
	var r=gets(".r");
	var rul=gets(".r ul");
	var destw=1060;
	all.style.width=destw*ul.length+"px";
	sr.style.width=destw*srul.length+"px";
	r.style.width=destw*rul.length+"px";
	$(".detail a").mouseenter(function(){
		$(this).find("b").fadeIn()
	})
	$(".detail a").mouseleave(function(){
		$(this).find("b").fadeOut()
	})
	//全部左右按钮
	var control=$(".control i");
	var b=0;
	control[0].style.visibility = "hidden";
	control.eq(1).click(function(){
		b++;
		control[0].style.visibility = "visible";
		if(b<ul.length){
			if(b==ul.length-1){
				this.style.visibility = 'hidden'
			}
			$(".all").animate({
				marginLeft:-b*destw
			})
		}
	})
	control.eq(0).click(function(){
		b--;
		if(b>=0){
			control[1].style.visibility = 'visible';
			if(b==0){
				this.style.visibility = 'hidden'
			}
			$(".all").animate({
				marginLeft:-b*destw
			})
		}
	})
	//sr左右点击
	control[2].style.visibility = "hidden";
	control.eq(3).click(function(){
		b++;
		control[2].style.visibility = "visible";
		if(b<srul.length){
			if(b==srul.length-1){
				this.style.visibility = 'hidden'
			}
			$(".sr").animate({
				marginLeft:-b*destw
			})
		}
	})
	control.eq(2).click(function(){
		b--;
		if(b>=0){
			control[3].style.visibility = 'visible';
			if(b==0){
				this.style.visibility = 'hidden'
			}
			$(".sr").animate({
				marginLeft:-b*destw
			})
		}
	})
	//r左右点击
	control[4].style.visibility = "hidden";
	control.eq(5).click(function(){
		b++;
		control[4].style.visibility = "visible";
		if(b<rul.length){
			if(b==rul.length-1){
				this.style.visibility = 'hidden'
			}
			$(".r").animate({
				marginLeft:-b*destw
			})
		}
	})
	control.eq(4).click(function(){
		b--;
		if(b>=0){
			control[5].style.visibility = 'visible';
			if(b==0){
				this.style.visibility = 'hidden'
			}
			$(".r").animate({
				marginLeft:-b*destw
			})
		}
	})
	//式神录、主角录、声优阵点击切换
	var atlist=$(".shishen .tlist a");
	var dest=$(".dest");
	//式神录全部列表分类点击
	atlist.click(function(){
		var _index=$(this).index();
		dest.hide().eq(_index).fadeIn();
		atlist.removeClass("color").eq(_index).addClass("color")
	})
	var worldli=$(".world-tab li");
	var wdtl=$(".wdtl");
	worldli.click(function(){
		var _index=$(this).index();
		worldli.removeClass("rl").eq(_index).addClass("rl");
		wdtl.hide().eq(_index).fadeIn();
		if(_index>0){
			$(".bigimg").hide()
		}else if(_index==0&&gets(".shen").style.display=="block"){
			$(".bigimg").fadeIn()
		}
	})
	//主角录左右点击
	var namelist=$(".cwbot .name");
	var rolelist=$(".cwbot .role");
	var cwbotleft=$(".cwbot .left");
	var cwbotright=$(".cwbot .fr");
	var zjlist=$(".zjl .tlist a");
	var b=0;
	var dir="";
	function callback(){
		if(dir=="right"){
			if(b==zjlist.length-1){
				b=0
			}else{
				b++
			}
		}else{
			if(b==0){
				b=zjlist.length-1
			}else{
				b--
			}
		}
		namelist.eq(b).animate({
			right:-130,
			opacity:1
		},700)
		rolelist.eq(b).animate({
			left:-130,
			opacity:1
		},700)
		zjlist.removeClass("color").eq(b).addClass("color");
		var c=b+1;
		if(b==zjlist.length-1){
			c=0
		}
		var d=b-1;
		if(b==0){
			d=zjlist.length-1
		}
		//左右文字改变
		cwbotright.find("p").html(zjlist.eq(c).html())
		cwbotleft.find("p").html(zjlist.eq(d).html())
	}
	cwbotright.click(function(){
		dir="right";
		namelist.eq(b).animate({
			right:0,
			opacity:0
		},700)
		rolelist.eq(b).animate({
			left:0,
			opacity:0
		},700,callback)
	})
	cwbotleft.click(function(){
		dir="left";
		namelist.eq(b).animate({
			right:0,
			opacity:0
		},700)
		rolelist.eq(b).animate({
			left:0,
			opacity:0
		},700,callback)
	})
	/*游戏攻略*/
	var game_vice=$(".game-vice");
	var li_game=$(".game .bot li");
	var ul_game=$(".game .bot ul");
	var i_game=$(".game .bot li").find("i");
	// li_game.css({
		
	// })
	li_game.mouseenter(function(){
		var index=$(this).index();
		$(li_game).children("a").removeClass("game_hover").eq(index).addClass("game_hover");
		game_vice.fadeOut().eq(index).fadeIn()
	})
	var times=0;
	var time_game=setInterval(function(){
		if(times<li_game.length){
			times++;
			if(times==li_game.length){
				times=0
			}
			li_game.eq(times).mouseenter()
		}
	},3000)
	// li_game.addEventListener(mouseenter, li_game.mouseenter)
	// ul_game.mouseenter(function(e){
	// 	clearInterval(time_game);
	// 	e.stopPropagation()
	// })
	// ul_game.mouseleave(function(){
	// 	time_game=setInterval(function(){
	// 		if(times<li_game.length){
	// 			times++;
	// 			if(times==li_game.length){
	// 				times=0
	// 			}
	// 			li_game.eq(times).mouseenter()
	// 		}
	// 	},3000)
	// })
}
