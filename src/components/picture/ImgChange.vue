<template>
	<div class="img_icon">
		<div id="div0" @click="click(id[0])" :class="{change:isChange[0],nochange:!isChange[0]}"></div>
		<div id="div1" @click="click(id[1])" :class="{change:isChange[1],nochange:!isChange[1]}"></div>
		<div id="div2" @click="click(id[2])" :class="{change:isChange[2],nochange:!isChange[2]}"></div>
		<div id="div3" @click="click(id[3])" :class="{change:isChange[3],nochange:!isChange[3]}"></div>
	</div>
</template>

<script type="text/javascript">
	//引入jquery
	import $ from 'jquery'

	export default{
		data(){
			return{
				id:[0,1,2,3],
				isChange:[true,false,false,false]
			}
		},
		props:['index'],
		methods:{
			click(index){
				this.$emit('childEvent',index);
			}
		},
		watch:{
			index:function(newV,oldV){
				for(let i = 0; i < this.isChange.length; i++)
				{
					this.isChange[i] = false;
				}
				this.isChange[newV] = true;
				this.isChange[oldV] = false

				for(let i = 0; i < this.isChange.length; i++)
				{
					if(this.isChange[i])
					{
						var id = "div" + newV;
						$("#" + id).attr("class","change")
						id = "div" + oldV;
						$("#" + id).attr("class","nochange")
					}
				}
			}
		}
	}
</script>

<style scope>
	.img_icon{
		position: relative;
		top:350px;
		left:310px;
	}
	.change{
		width:30px;
		height: 7px;
		background-color: black;
		border-radius: 15%;
		opacity: 0.4;
		float: left;
		margin: 6px;	
	}
	.nochange{
		width:30px;
		height: 7px;
		background-color: grey;
		border-radius: 15%;
		opacity: 0.4;
		float: left;
		margin: 6px;	
	}
	.img_icon div:hover{
		background-color: black;
		cursor: pointer;
	}

</style>