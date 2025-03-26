<template>
  <view class="counter-container">
    <view class="title">{{ store.name }}</view>
    <view class="count">{{ store.count }}</view>
    <view class="double-count">双倍值: {{ store.doubleCount }}</view>
    <view class="actions">
      <button @click="store.increment">+1</button>
      <button @click="store.decrement">-1</button>
      <button @click="store.reset">重置</button>
    </view>
    <view class="custom-set">
      <input type="number" v-model="newCount" />
      <button @click="setNewCount">设置</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '../store/counter';

// 使用store
const store = useCounterStore();
const newCount = ref(0);

function setNewCount() {
  store.setCount(Number(newCount.value));
}
</script>

<style>
.counter-container {
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.count {
  font-size: 24px;
  margin-bottom: 10px;
}

.double-count {
  color: #666;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.custom-set {
  display: flex;
  justify-content: center;
  gap: 10px;
}

input {
  width: 80px;
  border: 1px solid #ccc;
  padding: 5px;
}

button {
  background-color: #007aff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
}
</style> 