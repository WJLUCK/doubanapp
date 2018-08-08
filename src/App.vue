<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html {
  font-size: 100px;
  -webkit-text-size-adjust: none;
}
div {
  font-size: 16px;
}

/* 谷歌浏览器 能滚动 但是滚动条不显示 */
::-webkit-scrollbar {
  width: 0px;
}
</style>
