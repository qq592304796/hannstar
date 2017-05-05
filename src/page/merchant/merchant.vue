<template>
	<div class="merchant">
		<ul class="nav_tab">
            <li class="nav_tab_item active">上架</li>
            <li class="nav_tab_item">下架</li>
        </ul>
        <div class="searchBox">
            <div class="searchName">
                商品名称: <input type="text" name="">
            </div>
            <div class="searchTime"></div>
            <button class="searchBtn">搜索</button>
        </div>
        <div class="groupBtn">
            <button class="groupBtnItem">
                <img src="./icon-add.png">
                <span>添加</span>
            </button>
            <button class="groupBtnItem">
                <img src="./icon-arrow.png">
                <span>下架</span>
            </button>
            <button class="groupBtnItem">
                <img src="./icon-delete.png">
                <span>删除</span>
            </button>
        </div>
        <div class="goodSelect">
            <input type="text" name="">
        </div>
        <div class="tableData">
            <table cellspacing="0" cellpadding="0" width="100%">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox">
                        </th>
                        <th>图片</th>
                        <th>商品名称</th>
                        <th>商品类型</th>
                        <th>商品型号</th>
                        <th>原价</th>
                        <th>现价</th>
                        <th>库存</th>
                        <th>添加日期</th>
                        <th>销量</th>
                        <th>库存</th>
                        <th>收藏</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="13">暂无数据</td>
                    </tr>
                    <tr v-for="">
                        <td>
                            <input type="checkbox" name="">
                        </td>
                        <td>
                            <img src="">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
	</div>
</template>
<script type="text/javascript">
import func from '../.././fentch/func'
import api from '../../fentch/api'
	export default{
        data(){
            return {
                goodsList:[],
                proList:''
            }
        },
        created(){
            func.ajaxGet(api.selectProduct,{
                currentPage:1,
                pageSize:12
            }, res => {
                console.log(res)
            })
        }
    }
</script>
<style type="text/css">
.merchant{background-color:#fff;margin-top:46px;padding-bottom:20px}
.merchant .nav_tab{height:50px;line-height:50px;padding:0 10px;border-bottom:1px solid #ccc;position:relative}
.merchant .nav_tab .nav_tab_item{display:inline-block;width:100px;text-align:center;cursor:pointer;position:relative;}
.merchant .nav_tab li.active::after{content:"";width:100px;height:4px;border-radius:4px;position:absolute;left:0;bottom:0;background-color:red;} 
.searchBox{padding:20px;overflow:hidden;}   
.searchBox .searchName{float:left;height:36px;line-height:36px;}
.searchBox .searchName > input{border:1px solid #bfcbd9;border-radius:4px;width:350px;height:34px;}
.searchBtn{float:right;border:1px solid #bfcbd9;background-color:#fff;cursor:pointer;border-radius:4px;padding:10px 20px;}
.groupBtnItem{position:relative;padding-right:5px;float:left;background:#fff;outline:none;display:inline-block;height:40px;border-radius:4px;border:1px solid #ddd;cursor:pointer;}
.groupBtnItem:first-child{border-top-right-radius:0;border-bottom-right-radius:0;}
.groupBtnItem:not(:first-child):not(:last-child){border-radius:0;}
.groupBtnItem:last-child{border-top-left-radius:0;border-bottom-left-radius:0;}
.groupBtnItem > img{width:15px;vertical-align:middle;}
.goodSelect{float:left;margin-left:30px;}
.tableData{margin-top:80px;}
.tableData table{border:1px solid #ddd;text-align:center;}
.tableData table > thead{background-color:#f6f6f6;}
.tableData table > thead tr th{border-right:1px solid #ddd;height:50px;vertical-align:middle;}
.tableData table > tbody tr td{border-top:1px solid #ddd;height:50px;border-right:1px solid #ddd;vertical-align:middle;border-bottom:1px solid #ddd;}
</style>