<template>
<div class="left">
	<span>欢迎来到我的购物商场</span> &nbsp&nbsp&nbsp
	<span @click="showOverLay(item)" v-for="item in left">{{item}}&nbsp&nbsp&nbsp</span>
	<span id="welcome" style="display:none;position:relative;left:380px;color:red;">
		欢迎{{username[index]}}用户
	</span>
	<div id="overLay">
		<div id="onLoad">
			<div class="close" @click="close">x</div>
			<div class="select">
				<div @click="selectLOR('登录')"><strong>登录</strong></div>
				<div @click="selectLOR('注册')"><strong>注册</strong></div>
			</div>
			<div class="log">
				<p style="font-size:28px;position:relative;top:-60px;color:red;">欢迎来到{{LOR}}界面</p>
				<p><input v-model="usernameBuf" @click="clickUser" /></p>
				<p><input v-model="passwordBuf" @click="clickPass" /></p>
				<p id="err" style="display:none;color:red;">{{err}}</p>
				<p><button @click="logIn">{{LOR}}</button></p>
			</div>
		</div>
	</div>
</div>
</template>

<script >
	import $ from 'jquery'
	export default{

		data(){
			return{
				index:0,
				left:["登录","注册"],
				usernameBuf:"用户名",
				passwordBuf:"密码",
				username:["llb"],
				password:["123"],
				err:"",
				LOR:"",
			}
		},
		methods:{
			/*
				展现遮罩层和关闭遮罩层
			 */
			showOverLay(item){
				$("#overLay").show();
				this.LOR = item;
			},
			close(){
				$("#overLay").hide();
			},
			/*
				当点击文本框时默认内容消失
			 */
			clickUser(){
				this.usernameBuf="";
			},
			clickPass(){
				this.passwordBuf="";
			},
			/*
				登录校对密码用户名
			 */
			logIn(){
				$("#err").hide();
				if(this.LOR == "登录")
				{

					for(let i = 0; i < this.username.length; i++)
					{
						if(this.username[i] == this.usernameBuf && this.password[i] == this.passwordBuf)
						{
							this.close();
							$("#welcome").show()
						
						}
					}
					this.err = "用户名或密码错误";
					$("#err").show();

				}
				else
				{
					console.log(this.username)
					for(let i = 0; i < this.username.length; i++)
					{	
						
						if(this.usernameBuf == "")
						{
							console.log(1)
							this.err = "不能输入空的用户名";
							$("#err").show();
						}
						else
						{
							if(this.username[i] == this.usernameBuf)
							{
								
								this.err = "此用户名已存在";
								$("#err").show();
								this.clickUser();
								this.clickPass();

							}
							else
							{
								this.username.push(this.usernameBuf);
								this.password.push(this.passwordBuf);
								this.close();
								this.index = this.username.indexOf(this.usernameBuf);
							
								$("#welcome").show()
								return;					
							}
						}
					}
					console.log(this.username)
				}
			},
			/*
				登录注册界面切换
			*/
			selectLOR(data){
				this.LOR = data;
				this.err = "";
				$("#err").hide();
			}
		},
	}
</script>

<style scoped>
/*
	选择登录注册界面样式
 */
.select{
	position: relative;
	top: 40px;
	height: 100px;
	text-align: center;
}
.select div{
	height: 60px;
	width: 50%;
	float: left;
	font-size: 25px;
	border-size:1px;
}
.select div:hover{
	cursor: pointer;
	background-color: rgba(0,0,0,0.3);
	color: red;
	
}
.select em{
	position:relative;
	top:30px;
}
/*
	遮罩样式
 */
#overLay{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0px;
	top:0px;
	display: none;
	z-index: 100;
	background:rgba(0,0,0,0.5);
}
/*
	登录弹框样式
 */
#onLoad{
	position: absolute;
	left: 525px;
	top: 50px;
	background-color: white;
	width: 450px;
	height: 550px;
	opacity: 1.0;
	z-index: 101;
}
/*
	关闭按钮样式
 */
.close{
	position: relative;
	left:420px;
	font-size: 30px;
	width: 40px;
	height: 40px;
}
.close:hover{
	cursor: pointer;
}
/*
	登录样式
 */
.log{
	position: relative;
	top:100px;
	text-align: center;
}
.log input{
	width: 200px;
	height: 25px;
	border-radius: 25px;
	outline: none;
	text-align: center;
	color: grey;

}
.log button{
	outline: none;
	width: 70px;
	background-color: white;
	border:1px grey solid;
}
.log button:hover{
	cursor: pointer;
	background-color:rgba(0,0,0,0.1);
	color: red;
}


</style>