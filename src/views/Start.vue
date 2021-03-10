<template>
  <div>
		<button @click="start">开始任务</button>
  </div>
</template>

<script>
	import {defineComponent,ref,onMounted, onUnmounted} from 'vue'
	import {useRouter} from 'vue-router'
	export default defineComponent({
		name:'Start',
		setup(){
			let router = useRouter()
			let name = ref('jack')
			let num = ref(10)
			let obj = ref({
				msg:'start'
			})
			let start = ()=>{
				router.push({
					path:'/Home',
					query:{
						name:name.value,
						num:num.value,
						obj:JSON.stringify(obj.value)
					}
				})
			}
			onMounted(()=>{
				console.log('Mounted')
			})
			onUnmounted(()=>{
				console.log('Unmounted')
			})
			console.log('setup')
			return {
				router,
				start
			}
		}
		
	})
</script>
