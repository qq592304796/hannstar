<template>
	<div class="adverList">
		<div class="adverSelect">
			<div class="selectItem">
				<div class="title">
					<p>类型</p>
				</div>
				<div class="selectList">
					<ul>
						<li v-for="item in list.types" :class="{chedk:item.checked}" @click="selectFunc(item)">{{item}}</li>
					</ul>
				</div>
			</div>
			<div class="selectItem">
				<div class="title">
					<p>状态</p>
				</div>
				<div class="selectList">
					<ul>
						<li v-for="item in list.status">{{item}}</li>
					</ul>
				</div>
			</div>
			<div class="selectItem">
				<div class="title">
					<p>投放方式</p>
				</div>
				<div class="selectList">
					<ul>
						<li v-for="(item,index) in list.ways">{{item}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="selectBtn">
			<button class="btn" @click="addShow()">添加</button>
			</div>
			<div class="dataTable">
			<table cellspacing="0" cellpadding="0">
				<thead>
					<tr>
						<th v-for="item in list.thead">{{item}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="">
						<td colspan="10">暂无数据</td>
					</tr>
					<tr v-for="item in addList">
						<td>{{item.title}}</td>
						<td>{{item.memberCount}}</td>
						<td>{{item.totalPoint}}</td>
						<td>{{item.gmtCreate}}</td>
						<td>{{item.expandOrder}}</td>
						<td>{{item.typeEnum}}</td>
						<td>{{item.putWayEnum}}</td>
						<td>{{item.statusEnum}}</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
		<addAdver ref="addAdver"></addAdver>
	</div>
</template>
<script type="text/javascript">
import page from '@/components/pagination/pagination.vue'
import addAdver from './addAdver.vue'
import func from '../.././fentch/func'
import api from '../../fentch/api'
	export default{
		data(){
			return {
				list:{
					types:['平面广告','视频广告','易赞','店铺红包'],
					status:['投放中','投放结束'],
					ways:['投放区域','粉丝投放','雷达投放','普通红包','拼手气红包'],
					thead:['推广名称','推广人数','推广积分','发布时间','推广单号','投放类型','投放方式','投放状态','操作']
				},
				addList:'',
				isShow:false
			}
		},
		components:{
			"v-page":page,
			"addAdver":addAdver
		},
		mounted(){	//生成实例后调用  请求数据初始化页面
			this.$nextTick(function(){
				this.getList();
			})
		},
		methods:{
			getList(){
				func.ajaxGet(api.selectListByMerchant,{
	                currentPage:1,
	                pageSize:12
	            }, res => {
	                this.addList = res.data.model.records
	                for(var i=0;i<this.addList.length;i++){
	                	switch(this.addList[i].typeEnum){
	                		case 'AD_TYPE_FLAT':{
	                			this.addList[i].typeEnum = '平面广告'
	                		}break;
	                		case 'AD_TYPE_VIDEO':{
	                			this.addList[i].typeEnum = '视频'
	                		}break;
	                		case 'AD_TYPE_PRAISE':{
	                			this.addList[i].typeEnum = 'E赞'
	                		}break;
	                		case 'AD_TYPE_PACKET':{
	                			this.addList[i].typeEnum = '红包'
	                		}break;
	                	};
	                	switch(this.addList[i].putWayEnum){
	                		case 'PUT_WAY_AREAS':{
	                			this.addList[i].putWayEnum = '区域'
	                		}break;
	                		case 'PUT_WAY_FENS':{
	                			this.addList[i].putWayEnum = '粉丝'
	                		}break;
	                		case 'PUT_WAY_RADAR':{
	                			this.addList[i].putWayEnum = '雷达'
	                		}break;
	                	};
	                	switch(this.addList[i].statusEnum){
	                		case 'AD_STATUS_DELETE':{
	                			this.addList[i].statusEnum = '删除'
	                		}break;
	                		case 'AD_STATUS_ADD':{
	                			this.addList[i].statusEnum = '上架'
	                		}break;
	                		case 'AD_STATUS_PUTING':{
	                			this.addList[i].statusEnum = '投放中'
	                		}break;
	                		case 'AD_STATUS_PUTED':{
	                			this.addList[i].statusEnum = '投放结束'
	                		}break;
	                		case 'AD_STATUS_OUT':{
	                			this.addList[i].statusEnum = '下架'
	                		}break;
	                		case 'AD_STATUS_AUDIT':{
	                			this.addList[i].statusEnum = '审核中'
	                		}break;
	                	}
	                }
	                console.log(this.addList.length)
	            })
			},
			selectFunc(item){
				// if(typeof item.checked == 'undefind'){
					// this.$set(item,"checked",true)
				// }else{
				// 	item.checked = !item.checked
				// }
				console.log(typeof item)
			},
			addShow(){
				this.$refs.addAdver.show()
			}
		}
	}
</script>
<style type="text/css">
.adverList{padding:60px 0;}
.adverSelect{box-shadow: 0 0  6px 0 rgba(226,106,20,.5); margin-bottom: 4px;}
.selectItem{border: 1px solid #f0b48b; line-height: 27px; margin-top: -1px; padding: 8px; position: relative;}
.selectItem > .title{float:left;width:180px;border-right:1px solid #f0b48b;text-align:right;padding:5px 20px 5px 0;}
.selectItem > .selectList{color: #666; margin-left: 220px;}
.selectItem > .selectList > ul li{display:inline-block;margin-right:20px;padding:5px 10px;border-radius:5px;cursor:pointer;}
.selectItem > .selectList > ul li.active{background-color:#ed5612;color:#fff;}
.selectBtn{padding:20px 0;}
.selectBtn .btn{border-radius: 3px;  padding: 10px 14px; display: inline-block; background:#f46220;  color: #FFFFFF; margin: 0 5px; box-shadow: inset 0 -1px 1px 0 rgba(193,61,0,0.75); cursor: pointer; outline: none;border:none;}
.dataTable > table{width:100%;text-align:center;}
.dataTable > table > thead{background-color:#f6f6f6;}
.dataTable > table > thead tr th{border:1px solid #ddd;border-right:0;text-align:center;line-height:48px;}
.dataTable > table > tbody tr td{border:1px solid #ddd;border-top:0;vertical-align:middle;height:86px;}
</style>