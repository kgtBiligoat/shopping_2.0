<template>
<div id="demo">
  <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
</template>

<script >
	export default{
 		data() {
 			return{
				show:true
 			}
    		
  		}
	}
</script>

<style scoped>
#demo{
	position: absolute;
	top: 100px;
	left:100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>