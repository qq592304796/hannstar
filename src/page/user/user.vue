<template>
	<div class="user">
		<div class="userNav">
			<div class="nav_head">
				<span class="camera">
					<img src="./edit_my_headimg.png" width="100%">
				</span>
				<div class="user_avatar">
					<!-- <img src="" width="100%" height="100%"> -->
				</div>
				<p>阳光酒店动力朗餐厅</p>
				<p>15870689881</p>
			</div>
			<div class="nav_list">
				<a href="/User/Personal" class="nav_btn">个人资料</a>
				<a href="/User/ScanCode" class="nav_btn">二维码</a>
				<a href="/User/ApplyShop" class="nav_btn">申请实体店铺</a>
				<a href="/User/InviteShop" class="nav_btn">我邀请的商家</a>
				<router-link to="user/eFriend" class="nav_btn">我的E友</router-link>
				<a href="/User/Ensure" class="nav_btn">退货保障</a>
				<a href="/User/Adress" class="nav_btn">收货地址管理</a>
				<a href="/User/Account" class="nav_btn">爱心账户</a>
			</div>
		</div>
		<div class="userContent">
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css">
.user{width:70%;margin:100px auto 0;position:relative;}
.userNav{float:left;width:170px;background-color:#fff2c7;box-shadow:0 1px 5px 0 rgba(184,184,184,.75);margin-right:20px;}
.nav_head{position:relative;text-align:center;padding:10px 20px;}
.userNav .nav_head .camera{display:block;width:30px;height:30px;position:absolute;right:5px;top:5px;cursor:pointer;}
.userNav .nav_head .user_avatar{width:124px;height:124px;border-radius:50%;overflow:hidden;box-shadow:0 0 4px 0 rgba(182,182,182,.4);margin:0 auto 20px;background:url(./my-nav-pix.png) center center;}
.nav_list .nav_btn{display:block;text-align:center;height:50px;line-height:50px;font-size:18px;}
.nav_list .nav_btn.active{color:#f96400;background:rgba(255,255,255,.8);}
.userContent{min-height:710px;box-shadow:0 2px 4px 0 rgba(154,144,144,.6);position:relative;margin-left:202px;}
</style>