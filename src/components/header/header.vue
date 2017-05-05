<template>
	<div class="header">
		<div class="headBox">
			<a href="" class="logo">
				<img src="./LOGO.png">
			</a>
			<div class="headerNav">
				<router-link to="/home/merchant" class="navList">
					<i class="bus"></i>
					商品管理
				</router-link>
				<router-link to="/home/adverList" class="navList">
					<i class="add"></i>
					投放广告
				</router-link>
				<router-link to="/home/favorable" class="navList">
					<i class="add"></i>
					优惠设置
				</router-link>
				<a href="" class="navList">
					<i class="eff"></i>
					经营效果
				</a>
				<router-link to="/home/Merchandise" class="navList">
					<i class="ord"></i>
					商品订单
				</router-link>
				<a href="" class="navList">
					<i class="fin"></i>
					财务管理
				</a>
				<a href="" class="navList">
					<i class="mar"></i>
					营销手册
				</a>
				<a href="" class="navList">
					<i class="fan"></i>
					粉丝管理
				</a>
				<a href="" class="navList">
					<i class="rat"></i>
					用户评价
				</a>
			</div>
			<div class="headerRight">
				<router-link to="/home/user" class="personSet">
					<i class="mineSet"></i>
				</router-link>
				<span>400-820-8888</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css">
.header{width:100%;height:70px;background:url(./icon_daohanglan.png) repeat-x;}
.headBox{width:90%;margin:0 auto;height:70px;}
.headBox .logo{float:left;display:block;margin-top:10px;}
.headerNav{margin-left:5%;}
.headerNav > .navList{color:#fff;height:60px;float:left;padding:10px 10px 0 10px;}
.headerNav > .navList:hover{color:rgb(249,100,0);background-color:#fff;}
.headerNav > .navList i{display:block;width:20px;height:20px;margin:5px auto;}
.headerRight{float:right;color:#fff;height:70px;line-height:70px;}
.headerRight > .personSet{display:inline-block;height:70px;}
.headerRight > .personSet > i{display:inline-block;width:50px;height:60px;background:url(./user.png) no-repeat center center;}
.headerNav > .navList i.bus{background:url(./icon-shangpin.png) no-repeat center center;}
.headerNav > .navList:hover .bus{background:url(./icon-shangpin-hover.png) no-repeat center center;}
.headerNav > .navList i.add{background:url(./icon-ad.png) no-repeat center center;}
.headerNav > .navList:hover .add{background:url(./icon-ad-hover.png) no-repeat center center;}
.headerNav > .navList i.eff{background:url(./icon-yanjing.png) no-repeat center center;}
.headerNav > .navList:hover .eff{background:url(./icon-yanjing-hover.png) no-repeat center center;}
.headerNav > .navList i.ord{background:url(./icon-shangpin.png) no-repeat center center;}
.headerNav > .navList:hover .ord{background:url(./icon-shangpin-hover.png) no-repeat center center;}
.headerNav > .navList i.fin{background:url(./icon-productOrder.png) no-repeat center center;}
.headerNav > .navList:hover .fin{background:url(./icon-productOrder-hover.png) no-repeat center center;}
.headerNav > .navList i.mar{background:url(./icon-caifu.png) no-repeat center center;}
.headerNav > .navList:hover .mar{background:url(./icon-caifu-hover.png) no-repeat center center;}
.headerNav > .navList i.fan{background:url(./icon-fans.png) no-repeat center center;}
.headerNav > .navList:hover .fan{background:url(./icon-fans-hover.png) no-repeat center center;}
.headerNav > .navList i.rat{background:url(./icon-evaluate.png) no-repeat center center;}
.headerNav > .navList:hover .rat{background:url(./icon-evaluate-hover.png) no-repeat center center;}
</style>