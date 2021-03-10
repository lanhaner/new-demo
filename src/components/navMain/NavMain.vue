<template>
	<div>
		<div v-if="list.length>0">
			<div v-for="(item,index) in list" :key="index">
				<div class="item">
					<input type="checkbox" v-model="item.complete">
					{{item.title}}
					<button @click="del(item,index)">删除</button>
				</div>
			</div>
		</div>
		<div v-else>
			没有任务
		</div>
	</div>
</template>

<script>
	import {
		defineComponent,
		ref
	} from 'vue'
	export default defineComponent({
		name: 'NavMain',
		props: {
			list: {
				type: Array,
				required: true
			}
		},
		emits: ['delTodo'],
		setup(props, ctx) {
			let del = (item, index) => {
				// console.log(item,index)
				ctx.emit('delTodo', index)
			}
			return {
				del
			}
		}
	})
</script>

<style scoped lang="scss">
	.item {
		height: 35px;
		line-height: 35px;
		width: 160px;
		cursor: pointer;
		position: relative;

		button {
			position: absolute;
			right: 20px;
			top: 6px;
			display: none;
			z-index: 99
		}

		&:hover {
			background: #CCC;

			button {
				display: block;
			}
		}
	}
</style>
