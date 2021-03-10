<template>
	<div>
		This is Child
		{{msg}}
		<button @click="send">传值给父组件</button>
	</div>
</template>

<script>
	import {defineComponent,ref,onMounted} from 'vue'
	export default defineComponent({
		name:'Child',
		props:{
			msg:{
				type:String
			}
		},
		setup(props,ctx){
			console.log(props.msg)
			let childMsg = ref('这是子组件的数值')
			let send = ()=>{
				ctx.emit('childSend',childMsg.value)
			}
			onMounted(()=>{
				ctx.emit('childSend',{
					value1:childMsg.value,
					value2:childMsg.value
					})
			})
			return {
				childMsg,
				send
			}
			
		}
	})
</script>

<style>
</style>
