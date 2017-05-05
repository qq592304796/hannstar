<template>
	<div class="home">
		<v-header></v-header>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
import header from './header/header'
	export default{
		components:{
			"v-header":header
		}
	}
</script>