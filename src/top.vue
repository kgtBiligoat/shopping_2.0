<template>
<div class="top"> <!-- 最上方的组件 -->
	<left/>
	<right/>
	<hr>

</div>
</template>

<script>
/**
 *	left是top中左边的组件
 * 	right是top中右边的组件
 */
import left from "./components/top/left"
import right from "./components/top/right"

export default {
	
	data(){
		return{
		}
	},
	components:{
		"left":left,
		"right":right
	}
}
</script>

<style>
/*
	设置top的背景框颜色，内边距以及top中子组件的字体颜色大小
 */
.top{
	width:97.4%;
	height:25px;
	background-color: #DDDDDD;
	font-size: 18px;
	padding:20px;
	color: #AAAAAA;
}

</style>
