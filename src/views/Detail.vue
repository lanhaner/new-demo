<template>
	<div>
		This is Detail
		<child :msg="msg" @childSend="send"></child>
	</div>
</template>

<script>
	import {defineComponent,ref} from 'vue'
	import child from '@/components/child/Child.vue'
	export default defineComponent({
		name:'Detail',
		components:{
			child
		},
		setup(){
			let msg = ref('这是父组件的数据')
			let send = (val)=>{
				console.log(val)
			}
			return {
				send,
				msg
			}
		}
	})
</script>

<style>
</style>
