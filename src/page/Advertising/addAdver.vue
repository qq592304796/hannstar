<template>
	<div class="addAdver" v-show='isShow'>
		<div class="addAdverContent">
			<h3>
				<span>投放广告</span>
				<p class="close" @click="hide()">返回</p>
			</h3>
			<div class="addItem">
				<p class="addItemLeft">
					广告类型<strong>*</strong>
				</p>
				<div class="addItemRight">
					<div class="wrap">
						<label>
							<input type="radio" @click="tabToggle('tab1')" name="1">
							平面广告
						</label>
						<label>
							<input type="radio" @click="tabToggle('tab2')" name="1">
							视频广告
						</label>
						<label>
							<input type="radio" @click="tabToggle('tab1')" name="1">
							抢红包
						</label>
						<label>
							<input type="radio" name="1">
							店铺红包
						</label>
					</div>
				</div>
			</div>
			<div class="addItem">
				<p class="addItemLeft">
					投放方式<strong>*</strong>
				</p>
				<div class="addItemRight">
					<div class="wrap">
						<label>
							<input type="radio" name="2">
							区域投放
						</label>
						<label>
							<input type="radio" name="2">
							粉丝投放
						</label>
						<label>
							<input type="radio" name="2">
							雷达投放
						</label>
					</div>
				</div>
			</div>
			<div class="addItem">
				<p class="addItemLeft">
					粉丝筛选<strong>*</strong>
				</p>
				<div class="addItemRight">
					<div class="wrap">
						年龄： <input v-model="age1" name="age"> 到 <input v-model="age2" name="age">
					</div>
					<div class="wrap">
						性别：
						<label>
							<input type="radio" name="3">
							不限
						</label>
						<label>
							<input type="radio" name="3">
							男
						</label>
						<label>
							<input type="radio" name="3">
							女
						</label>
					</div>
				</div>
			</div>
			<!--上传组件-->
			<component :is='currentView'></component>
			<div class="addItem">
				<p class="addItemLeft">
					广告标题<strong>*</strong>
				</p>
				<div class="addItemRight">
					<input type="text" name="title" placeholder="请输入广告标题">
				</div>
			</div>
			<div class="addItem">
				<p class="addItemLeft">
					广告单价<strong>*</strong>
				</p>
				<div class="addItemRight">
					<input type="text" name="price" placeholder="积分">
					最低积分<span class="orange">0.00</span>积分
				</div>
			</div>
			<div class="addItem">
				<p class="addItemLeft">
					投放积分<strong>*</strong>
				</p>
				<div class="addItemRight">
					<input type="text" name="price" placeholder="积分">
				</div>
			</div>
			<div class="addItem">
				<p class="addItemLeft">
					广告数量<strong>*</strong>
				</p>
				<div class="addItemRight">
					<input type="text" name="price" placeholder="数量">个
				</div>
			</div>
			<div class="addItem">
				<p class="addItemLeft">
					所需积分<strong>*</strong>
				</p>
				<div class="addItemRight">
					<input type="text" name="price" placeholder="所需积分">
					（可用广告积分<span class="orange">0.0</span>）
					<button class="btn">去充值</button>
				</div>
			</div>
		</div>
		<div class="submitBtn">
			<button class="btn">确认投放</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import tab1 from './tab1.vue';
import tab2 from './tab2.vue'
	export default{
		data(){
			return {
				 currentView:'',
				 isShow:false,
				 age1:'',
				 age2:''
			}
		},
		methods:{
			tabToggle(tabText) {
				
            },
            change(){
            	console.log(this.age1)
            },
            show(){
            	this.isShow = true
            },
            hide(){
            	this.isShow = false
            }
		},
		components:{
			'tab1':tab1,
			'tab2':tab2
		}
	}
</script>
<style type="text/css">
.addAdver{position:absolute;top:70px;left:0;right:0;bottom:0;background-color:#fff;}
.addAdverContent{margin-top:40px;border:1px solid #ddd;}
.addAdverContent > h3{border-bottom:1px solid #ddd;position:relative;}
.addAdverContent > h3 .close{position:absolute;right:50px;top:20px;padding:10px 15px;background:#f44b00;color:#fff;border-radius:5px;cursor:pointer;}
.addAdverContent > h3 .close:hover{background-color:#af3905;}
.addAdverContent > h3 > span{display:block;font-size:20px;font-weight:bold;line-height:82px;border-top:3px solid #f44b00;width:126px;text-align:center;margin-left:170px;}
.addItem{overflow:hidden;}
.addItem > .addItemLeft{float:left;width:25%;line-height:68px;text-align:right;vertical-align:middle;}
.addItem > .addItemLeft > strong{color:#f44b00;}
.addItem > .addItemRight{float:left;width:70%;padding:16px 0;margin-left:20px;}
.addItem > .addItemRight > .wrap{display:inline-block;background-color:#fff;padding:12px 26px;border:1px solid #ddd;box-shadow: inset 0 0 7px 0 rgba(228,228,228,0.75);}
.addItem > .addItemRight > .wrap input[type='radio']{vertical-align:top;}
.addItem > .addItemRight > .wrap input[name='age']{border:1px solid #ddd;height:28px;width:68px;line-height:28px;}
.addItem > .addItemRight input[name='title']{box-shadow: inset 0 0 7px 0 rgba(228,228,228,0.75); border: 1px solid #DDDDDD;width: 344px;font-size: 16px;line-height:36px;text-indent:10px;}
.addItem > .addItemRight input[name='price']{box-shadow: inset 0 0 7px 0 rgba(228,228,228,0.75); border: 1px solid #DDDDDD;width: 158px;font-size: 16px;line-height:36px;text-indent:10px;}
.addItemRight span{color:#f44b00;}
.addItemRight .btn{outline:none;cursor:pointer;width:84px;height:34px;border-radius:3px;background-image:linear-gradient(360deg,#4ba603,#7fd63a);background-image:-webkit-linear-gradient(360deg,#4ba603,#7fd63a);border:none;font-size:18px;background-color:#4ba603;color:#fff;}
.submitBtn{text-align:center;margin-top:20px;padding-bottom:50px;}
.submitBtn > .btn{width:204px;height:54px;border-radius:5px;color:#fff;background-color:#ed5917;border:none;}
.close{}
</style>