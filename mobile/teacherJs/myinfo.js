$(function(){
	var info = {
		init:function(){
			this.event();
		},
		event:function(){
			$('.pre').on('click',function(){
				// location.href = '../code/#!/me';
				window.history.back();
			});
			$('.save').on('click',function(){
				alert('修改成功');
			});
			$('.cancel').on('click',function(){
				location.reload();
			})
		}
	};
	info.init();
})