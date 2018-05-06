<template>
<div class="right">
	<span href="" v-for="item in option">{{item}}&nbsp&nbsp&nbsp</span>
	<span @click="show">网站导航</span>
	<div v-show="isShow">
		
		<li v-for="item in navigation">{{item}}</li>
		
	</div>
</div>
</template>

<script >
	
	export default{
		data(){
			return{
				option:["购物车","收藏夹"],
				navigation:["七天退货","品质保障","特色服务","帮助中心"],
				isShow:false
			}
		},
		methods:{
			show(){
				this.isShow = !this.isShow;
			}
		}
	}
</script>

<style scoped>

</style>