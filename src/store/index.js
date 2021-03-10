import { createStore } from 'vuex'

export default createStore({
	//定义所需要的状态
  state: {
		list : [
				{
					title:'吃饭',
					complete:false
				},
				{
					title:'睡觉',
					complete:false
				},
				{
					title:'打豆豆',
					complete:false
				}
			]
  },
	//同步修改state，全是方法
  mutations: {
		//添加任务
		addTodo(state,payload){
			state.list.push(payload)
		},
		//删除任务
		delTodo(state,payload){
			state.list.splice(payload,1)
		},
		//删除已完成
		clear(state,payload){
			state.list = payload
		}
  },
	//异步提交mutation
  actions: {
	
  },
	//模块化
  modules: {
  }
})
