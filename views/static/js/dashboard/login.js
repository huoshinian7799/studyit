define(["jquery","form","cookie"],function($){
	 $("#login-form").submit(function(){
        $(this).ajaxSubmit({
            url:"/api/login",
            type:"post",
            success:function(data){
                if(data.code == 200){
                    $.cookie("userinfo",JSON.stringify(data.result),{path: "/"});
                    location.href = "/";
                }
            },
            error:function(){
                    console.log('出错了')
            }
        })
        return false;
      })
       
})