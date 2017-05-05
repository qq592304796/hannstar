<template>
	<div class="addItem">
		<p class="addItemLeft">
			上传海报广告<strong>*</strong>
		</p>
		<div class="addItemRight">
			<div class="upload">
				<div class="input_box">
					<div v-for="(item,index) in imgs" class="img_box">
						<img :src="item">
						<span @click="delete_img(index)">
							<img src="./delete.png">
						</span>
					</div>
					<div class="add_img">
						<span class="add_bg"><img src="./add_img.png" alt=""></span>
						<span>上传图片</span>
						<input type="file" @change="add_img">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				imgs:[]
			}
		},
		methods:{
			delete_img(item){
				this.imgs.splice(item,1);
			},
			add_img(event){
				var reader =new FileReader();
				var img1=event.target.files[0];
				reader.readAsDataURL(img1);
				var that=this;
				reader.onloadend=function(){
                 	   that.imgs.push(reader.result)
                 }
			}
		}
	}
</script>
<style type="text/css">
	.input_box{display:flex;}
	.img_box{width:150px;height:120px;border:1px solid #ddd;position:relative;overflow:hidden;margin-right:5px;}
	.img_box>img{display:block;width:100%;height:100%;}
	.img_box>span{position:absolute;right:05px;bottom:0;z-index:100;cursor:pointer;}
	.add_img{width:150px;height:120px;border:1px solid #ddd;position:relative;text-align:center;cursor:pointer;}
	.add_img .add_bg{display:block;margin:30px 0 10px;}
	.add_img>input{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9999;opacity:0;cursor:pointer;}
</style>