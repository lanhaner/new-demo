<template>
	<div>
		<NavHeader @add="add"></NavHeader>
		<NavMain :list="list" @delTodo="del"></NavMain>
		<NavFooter :list="list" @clear="clear"></NavFooter>
	</div>
</template>

<script>
	import NavHeader from '@/components/navHeader/NavHeader'
	import NavMain from '@/components/navMain/NavMain'
	import NavFooter from '@/components/navFooter/NavFooter'
	import {defineComponent,ref,computed} from 'vue'
	import {useStore} from 'vuex'
	export default defineComponent({
		name:'Home',
		props:{
			
		},
		components:{
			NavHeader,
			NavMain,
			NavFooter
		},
		setup(props,ctx){
			let store = useStore()
			let list = computed(()=>{
				return store.state.list
			})
			let value = ref('')
			let add = (val)=>{
				value.value = val
				let flag = true
				list.value.map(item=>{
					if(item.title===val){
						flag = false
						alert('任务已存在')
					}
				})
				store.commit('addTodo',{
					title:val,
					complete:false
				})
				// console.log(val)
			}
			let del = (val)=>{
				console.log(val)
				store.commit('delTodo',val)
			}
			let clear = (val)=>{
				console.log(val)
				store.commit('clear',val)
			}
			return {
				add,
				del,
				clear,
				value,
				list
			}
		}
	})
</script>

<style scoped lang="scss">
	
</style>
