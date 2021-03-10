<template>
	<div>
		<input placeholder="请输入名称" v-model="value" @keydown.enter="enter"/>
	</div>
</template>

<script>
	import {defineComponent,ref} from 'vue'
	export default defineComponent({
		name:'NavHeader',
		setup(props,ctx){
			let value = ref('')
			let enter = () =>{
				// console.log(value.value)
				ctx.emit('add',value.value)
				value.value=''
			}
			return {
				value,
				enter
			}
		}
	})
</script>

<style scoped lang="scss">
	input{
		margin-bottom:10px;
	}
</style>
