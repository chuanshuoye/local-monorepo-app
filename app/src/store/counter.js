import { defineStore } from 'pinia'

// 定义并导出计数器store
export const useCounterStore = defineStore('counter', {
  // 状态
  state: () => ({
    count: 0,
    name: '计数器'
  }),
  
  // 计算属性
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  
  // 操作方法
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    setCount(newCount) {
      this.count = newCount
    }
  }
}) 