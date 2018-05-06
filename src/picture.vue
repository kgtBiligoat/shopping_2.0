<template>
	<div class="picture">
		<img id="Img" :src="src[index].url" alt="加载失败" >
		<div @click="click(leftLoop)" class="leftArr"> < </div>
		<div @click="click(rightLoop)" class="rightArr"> > </div>
		<ImgChange :index="index" @childEvent="iconChange"/>
	</div>
</template>

<script>
	//引入jquery
	import $ from 'jquery'
	//引入Imgchange组件
	import ImgChange from './components/picture/ImgChange'

	export default {
		components:{
			'ImgChange':ImgChange,
		},
		data(){
			return{
				src:[
					{url:'../static/img/backImg1.jpg'},
					{url:'../static/img/backImg2.jpg'},
					{url:'../static/img/backImg3.jpg'},
					{url:'../static/img/backImg4.jpg'}
				],
				icon:[0,1,2,3],
				index:0,
			}
		},
		methods:{
			/*
				左箭头点击循环
			 */
			leftLoop(){
				if(this.index == 0) this.index = this.src.length - 1;
				else  --this.index;
			},

			/*
				右箭头点击循环
			 */
			rightLoop(){
				if(this.index == this.src.length - 1) this.index = 0;
				else  ++this.index;
			},			

			/*
				左右箭头点击后发生的变化
			 */
			click(LR){	
				var p = new Promise((resolve,reject)=>{
					$("#Img").fadeOut(500,() =>{
						LR();
						$("#Img").fadeIn(500);
						resolve(this.index)
					});
				})
				.then((data) => {
					console.log("现在图片的位置是" + data);
				})
			},
			/*
				切换图片
			 */
			change(index){
				var p = new Promise((resolve,reject)=>{
					$("#Img").fadeOut(500,() =>{
						this.index = index;
						$("#Img").fadeIn(500);
						resolve(this.index)
					});
				})
				.then((data) => {
					console.log("现在图片的位置是" + data);
				})
			},
			/*
				接受从子组件传来的参数变换图片
			 */
			iconChange(index){
				this.change(index);
			}

		}
	}
</script>

<style scoped></style>