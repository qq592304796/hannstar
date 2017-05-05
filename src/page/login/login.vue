<template>
	<div class="login">
		<h3 class="title">登录</h3>
	    <form id="login">
	    	<div class="account">
		      <input type="text" name="username" class="input_account" placeholder="请输入用户名">
		    </div>
		    <div class="pwd"> 
		      <input type="password" name="password" class="input_pwd"  placeholder="请输入密码">
		    </div>
		    <p>没有账号？ <router-link to="">去注册</router-link></p>
		    <input type="submit" class="submit_btn" value="登录">
	    </form>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
.login_container{-webkit-border-radius: 5px;border-radius: 5px;-moz-border-radius: 5px;background-clip: padding-box;margin: 180px auto;width: 350px;padding: 35px 35px 15px 35px;background: #fff;border: 1px solid #eaeaea;box-shadow: 0 0 25px #cac6c6;}
.login_container .title {margin: 0px auto 40px auto;text-align: center;color: #505458;}
.account,.pwd{margin-bottom:20px;}
.account .input_account{width:100%;border:1px solid #bfcbd9;border-radius:4px;color:#1f2d3d;height:30px;outline:0;text-indent:8px;}
.pwd .input_pwd{width:100%;border:1px solid #bfcbd9;border-radius:4px;color:#1f2d3d;height:30px;outline:0;text-indent:8px;}
.login_container .submit_btn{display:block;width:100%;padding:10px 0;text-align:center;background-color:#20a0ff;border:1px solid #20a0ff;border-radius:4px;font-size:14px;color:#fff;cursor:pointer;margin-top:20px;}
#login .error{color:#910;}
.login_checkbox > input{vertical-align:middle;margin:0;}
</style>