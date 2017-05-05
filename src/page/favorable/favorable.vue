<template>
	<div class="favorable">
		<div class="commonContent">
			<h3 class="favorTitle1">优惠变更</h3>
			<div class="favorInfo">
				<dl>
					<dt>折扣</dt>
					<dd>9.5折</dd>
				</dl>
				<dl>
					<dt>使用时间</dt>
					<dd>每天00:00~24:00</dd>
				</dl>
				<dl>
					<dt>有效期</dt>
					<dd>2017-5-4</dd>
				</dl>
			</div>
			<button class="favorBtn" v-show="btnShow" @click="buttonShow">优惠变更</button>
			<div class="favorChange" v-show="changeShow">
				<h3 class="favorTitle2">优惠类型</h3>
				<button class="favorBtn" @click="buttonShow">取消</button>
				<div class="favorChangeBox">
					<div class="favorChangeItem">
						<div class="favorLeft">
							<p>折扣：</p>
						</div>
						<div class="favorRight">
							<input type="text" class="txt" disabled="false">折
						</div>
						<input type="checkbox" class="check">
					</div>
					<div class="favorChangeItem">
						<div class="favorLeft">
							<p>满减：</p>
						</div>
						<div class="favorRight">
							满<input type="text" class="txt" disabled="false">减 <input type="text" class="txt" disabled="false">
						</div>
						<input type="checkbox" class="check">
					</div>
					<div class="favorChangeItem">
						<div class="favorLeft">
							<p>每满减：</p>
						</div>
						<div class="favorRight">
							每满<input type="text" class="txt" disabled="false">减 <input type="text" class="txt" disabled="false">
						</div>
						<input type="checkbox" class="check">
					</div>
				</div>
				<div class="favorChangeBox">
					<div class="favorChangeItem">
						<div class="favorLeft">
							<p>使用时间：</p>
						</div>
						<div class="favorRight">
							<input type="text" class="txt" disabled="false">至
							<input type="text" class="txt" disabled="false">
						</div>
					</div>
					<div class="favorChangeItem">
						<div class="favorLeft">
							<p>有效期：</p>
						</div>
						<div class="favorRight">
							<input type="text" class="txt" disabled="false">至 <input type="text" class="txt" disabled="false">
						</div>
					</div>
				</div>
				<button class="favorBtn">保存设置</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				btnShow:true,
				changeShow:false
			}
		},
		methods:{
			buttonShow(){
				if(this.btnShow){
					this.btnShow = false
					this.changeShow = true
				}else if(!this.btnShow){
					this.btnShow = true
					this.changeShow = false
				}
				
			},

		}
	}
</script>
<style type="text/css">
	.commonContent{width:1200px;margin:38px auto;border-top:2px solid #999;padding:0 28px;}
	.commonContent h3{color:#f44b00;font-size:18px;}
	.commonContent h3.favorTitle1{padding:38px 0 22px 0;}
	.commonContent h3.favorTitle2{padding:25px 0 22px 0;color:#999;display:inline-block;}
	.commonContent .favorInfo{background-color:#f8f8f8;padding:22px 30px;}
	.commonContent .favorInfo dl{line-height:30px;}
	.commonContent .favorInfo dl dt{width:70px;float:left;font-size:16px;color:#444;}
	.commonContent .favorInfo dl dd{margin-left:80px;}
	.favorBtn{display:block;width:140px;height:40px;border:1px solid #ff7900;border-radius:4px;color:#ff7900;background-color:#fff;cursor:pointer;float:right;margin:20px;}
	.favorChangeBox{border:1px solid #ddd;margin-bottom:35px;}
	.favorChangeItem{padding:15px 30px;position:relative;}
	.favorChangeItem > .check{position:absolute;right:30px;top:30px;}
	.favorChangeItem .favorLeft{width:90px;height:38px;line-height:38px;float:left;}
	.favorChangeItem .favorRight{margin-right:80px;}
	.favorChangeItem .favorRight > .txt{width:118px;height:38px;border:1px solid #ddd;}
</style>