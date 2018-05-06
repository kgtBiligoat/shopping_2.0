<template>
	<div class="left-aside"> 
		<div>商品分类</div>
		<a v-for="item in index" href="">商品类{{item}}</a>
	</div>
</template>

<script>

export default {
	
	data(){
		return{
			index:[1,2,3,4,5,7,8,9]
		}
	}
}
</script>

<style></style>
