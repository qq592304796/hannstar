<template>
	<div class="block">
	    <el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :page-sizes="[10, 20, 30, 40]"
		    :page-size="20"
		    layout="total, sizes, prev, pager, next, jumper"
		    :total="total">
	    </el-pagination>
	</div>
</template>
<script type="text/javascript">
	export default{
		data() {
	      return {
	        total:20
	      };
	    },
		methods: {
	      handleSizeChange(val) {
	      },
	      handleCurrentChange(val) {
	        this.currentPage = val;
	      }
	    }
	    
	}
</script>