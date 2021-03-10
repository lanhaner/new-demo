<template>
	<div class="container">
		<div>
			已完成{{isCompelet}} / 全部{{list.length}}
		</div>
		<div v-if="isCompelet > 0" class="btn">
			<button @click="clear">
				清除已完成
			</button>
		</div>
	</div>
</template>

<script>
	import {defineComponent,ref,computed} from 'vue'
	export default defineComponent({
		name:'NavFooter',
		props:{
			list:{
				type:Array,
				required:true
			}
		},
		setup(props,ctx){
			let isCompelet = computed(()=>{
				let arr = props.list.filter(item=>{
					return item.complete
				})
				return arr.length
			})
			let clear = ()=>{
				console.log('clear')
				let arr = props.list.filter(item=>{
					return item.complete == false
				})
				ctx.emit('clear',arr)
			}
			return{
				isCompelet,
				clear
			}
		}
	})
</script>

<style scoped lang="scss">
	.container{
		display: flex;
		align-items: center;
		.btn{
			margin-left:10px;
		}
	}
	
</style>
