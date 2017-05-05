<template>
	<div class="eFriend">
		<div class="userSearch">
			<input type="text" class="userSearchTxt" placeholder="会员或会员昵称">
			<div class="userSearchBtn">
				<img src="./my-icon-search.png">
			</div>
		</div>
		<div class="userTable">
			<table>
				<thead>
					<tr>
						<th style="width:20%">头像</th>
						<th style="width:10%">昵称</th>
						<th style="width:20%">账号</th>
						<th style="width:5%">等级</th>
						<th style="width:5%">性别</th>
						<th style="">所属区域</th>
						<th style="">注册时间</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
					</tr>
					<tr v-show='false'>
						<td colspan="8">暂无e友</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css">
.eFriend{width:90%;margin:0 auto;padding-top:40px;}
.userSearch{width:450px;height:46px;background-color:#ffb74d;border-radius:38px;border:1px solid #f0930b;margin:50px auto;position:relative;}
.userSearch .userSearchTxt{width:100%;background:transparent;outline:none;border:none;height:46px;line-height:46px;text-indent:18px;}
.userSearch .userSearchBtn{position:absolute;top:0;right:0;width:68px;height:38px;background:#ffeaca;border-radius:38px;text-align:center;padding-top:8px;cursor:pointer;}
.userSearch .userSearchBtn > img{vertical-align:middle;}
</style>