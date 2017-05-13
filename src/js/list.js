var list={
	init:function(){
		this.load();
		this.listen();
	},
	ajax:function(){
		var self = this;
		$.post('../php/list.php',{},function(data){
			data = JSON.parse(data)
			if(data.code==0){
				$('.spinner').css('display','none');
				self.createdom(data.data)
			}
			self.flag=true;
		})

	},
	createdom:function(data){
		var arr = [];
		for(var i=0;i<=3;i++){
			data.forEach(function(attrs,idx){
				arr.push('<li>')
				for(attr in attrs){
					arr.push('<div class="list-' + attr+'">');
					if(attr=='src'){
						arr.push('<img src="'+attrs[attr]+'"></div>')
					}else{
						arr.push('<p>'+attrs[attr]+'</p></div>')
					}
				}
				arr.push('<button>加入购物车</button></li>');
			})
		}
		
		$('.goodlist').append(arr.join(''));

	},
	listen:function(){
		this.flag = true;
		var self = this;
		window.onscroll = function(){
			// 如何判断滚动到底部？
			var scrollTop = window.scrollY;//document.body.scrollTop/document.documentElement.scrollTop
			//判断接近底部时
			if(scrollTop >= document.documentElement.offsetHeight - window.innerHeight - 100 && self.flag){
				self.flag=false;
				self.load();
			}
		}
	},
	load:function(){
		var self = this; 		
		$('.spinner').css('display','block');
		setTimeout(function(){
			self.ajax();
		},parseInt(Math.random()*2000+1000))
		
	}
}
list.init();



