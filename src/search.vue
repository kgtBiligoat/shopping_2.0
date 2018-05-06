<template>
	<div class="search">
		<input v-model="text"/>
		<button>搜索</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				text:""
			}
		}
	}
</script>

<style scoped></style>