<template>
	<div class="order_content">
	  	<div class="order_box">
	  		<div class="order_tab">
	  			<ul class="tab">
	  				<li>
	  					<span>待发货</span>
	  					<b class="count">2</b>
	  				</li>
	  				<li>
	  					<span>待付款</span>
	  					<b class="count">2</b>
	  				</li>
	  				<li>
	  					<span>已付款</span>
	  					<b class="count">2</b>
	  				</li>
	  				<li>
	  					<span>已发货</span>
	  					<b class="count">2</b>
	  				</li>
	  				<li>
	  					<span>待退款</span>
	  					<b class="count">2</b>
	  				</li>
	  				<span>|</span>
	  				<li>
	  					<span>已完成</span>
	  				</li>
	  				<span>|</span>
	  				<li>
	  					<span>已关闭</span>
	  				</li>
	  				<div class="search_box">
	  				<input class="search" type="text" placeholder="订单号/姓名">
	      				<div class="search_btn"><img src="./my-icon-search.png"></div>
	      			</div>
	  			</ul>
	  		</div>
	  		<div class="table_head">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td width="334">商品详情</td>
						<td width="204">订单号</td>
						<td width="124">收货人</td>
						<td width="158">实际付款</td>
						<td width="151">交易状态</td>
						<td width="154">售后</td>
					</tr>
				</table>
			</div>
			<div class="order_table">
				<div class="trade_order">
					<table border="0" cellspacing="0" cellpadding="0">
						<thead>
							<tr>
								<td colspan="6">
									<span>时间</span>
									<span>2017-5-2</span>
									<span>14:45:05</span>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
      						<td width="334">
  								<div class="product_media">
  									<a href="" class="product_media_img">
  										<img src="">
  									</a>
  									<div class="product_media_txt">
  										<p>耐克10周年限量版世界仅此一双哈，火热销售</p>
  									</div>
  								</div>
      						</td>
      						<td width="204">
  								<p>123456789</p>
      						</td>
      						<td width="124">
      							<p>万</p>
      						</td>
      						<td width="158">
      							<p>200.00</p>
      						</td>
      						<td width="151">
      							<div class="handler">
      								<p>买家已付款</p>
      								<p>详情</p>
      								<p class="handler_btn_light">待发货</p>
      							</div>
      						</td>
      						<td width="154">
      							<p>退款成功</p>
      						</td>
      					</tr>
						</tbody>
					</table>
				</div>
				<div class="trade_order">
					<table border="0" cellspacing="0" cellpadding="0">
						<thead>
							<tr>
								<td colspan="6">
									<span>时间</span>
									<span>2017-5-2</span>
									<span>14:45:05</span>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
      						<td width="334">
  								<div class="product_media">
  									<a href="" class="product_media_img">
  										<img src="">
  									</a>
  									<div class="product_media_txt">
  										<p>耐克10周年限量版世界仅此一双哈，火热销售</p>
  									</div>
  								</div>
      						</td>
      						<td width="204">
  								<p>123456789</p>
      						</td>
      						<td width="124">
      							<p>万</p>
      						</td>
      						<td width="158">
      							<p>200.00</p>
      						</td>
      						<td width="151">
      							<div class="handler">
      								<p>买家已付款</p>
      								<p>详情</p>
      								<p class="handler_btn_dim">已发货</p>
      							</div>
      						</td>
      						<td width="154">
      							<p>退款成功</p>
      						</td>
      					</tr>
						</tbody>
					</table>
				</div>
			</div>
  		</div>
  </div>
</template>
<script type="text/javascript">
	export default{}
</script>
<style type="text/css">
.order_content{width:1200px;margin:0 auto;border-top:2px solid #999;border-bottom:2px solid #999;padding:0 40px;}
.order_tab > ul{position:relative;margin-top:-2px;margin-bottom:20px;}
.order_tab > ul > li{display:inline-block;width:90px;text-align:center;padding:20px;cursor:pointer;position:relative;box-sizing:border-box;}
.order_tab > ul > li > .count{position:absolute;top:0;right:0;width:20px;height:20px;border:1px solid #f44b00;border-radius:50%;text-align:center;line-height:18px;font-size:14px;color:#f44b00;}
.search_box{float:right;width:300px;position:relative;margin:10px 0;}
.search_box .search{width:100%;font-size:16px;border:1px solid #f0930b;background-color:#ffb74d;text-indent:10px;line-height:34px;border-radius:34px;outline:none;}
.search_box .search_btn{position:absolute;width:70px;height:34px;background-color:#ffeaca;border-radius:32px;text-align:center;padding-top:2px;top:1px;right:0;}
.table_head{margin-bottom:20px;}
.table_head > table{background-color:#f8f8f8;line-height:46px;font-weight:500;width:100%;text-align:center;}
.trade_order{border:1px solid #ddd;margin:10px 0;}
.trade_order > table > thead{background-color:#fff7eb;color:#666;line-height:46px;}
.trade_order > table > thead  td{padding-left:20px;}
.trade_order > table > thead  td > span{padding-right:15px;}
.trade_order > table >tbody td{padding:16px 0;text-align:center;background-color:#fff;vertical-align:middle;}
.product_media{text-align:left;padding-left:20px;}
.product_media_img{display:inline-block;float:left;width:80px;height:80px;}
.product_media_img > img{width:100%;}
.product_media_txt{vertical-align:top;margin-left:90px;}
.handler_btn_light{background-color:#fba923;color:#fff;display:inline-block;line-height:26px;padding:0 12px;cursor:pointer;}
.handler_btn_dim{background-color:#ddd;color:#333;display:inline-block;line-height:26px;padding:0 12px;cursor:pointer;}
</style>