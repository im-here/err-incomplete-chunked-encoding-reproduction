<script setup lang="ts">
import {testApi} from "@/api/test.ts";
import {onMounted, ref} from "vue";

const dataLen = ref(0)
const fetchData = async ()=>{
  try {
    const {data}  = await testApi()
    dataLen.value = data?.length
  }catch (err){
    alert(err.message)
  }
}
onMounted(()=>fetchData())
</script>

<template>
  <div>
    成功获取{{dataLen}}条数据
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
