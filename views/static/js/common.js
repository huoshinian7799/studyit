
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
	define(["jquery","template","cookie"],function($,template){
		$(function(){
			if("/dashboard/login" != location.pathname){
				  var userInfo = JSON.parse($.cookie("userinfo"));
        	var html = template("login-tpl",userInfo);

        	// console.log(html)
        	$("#userinfo").html(html);
    

			}
		})
	})