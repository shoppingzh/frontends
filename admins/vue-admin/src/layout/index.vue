<template>
  <section class="layout layout--fixed">
    <aside class="layout__aside">
      <el-scrollbar>
        <el-menu default-active="0">
          <el-menu-item index="0">控制台</el-menu-item>
          <el-menu-item index="1">控制台</el-menu-item>
          <el-menu-item index="2">控制台</el-menu-item>
          <el-menu-item index="3">控制台</el-menu-item>
          <el-menu-item index="4">控制台</el-menu-item>
        </el-menu>
      </el-scrollbar>
    </aside>
    <main class="layout__main">
      <nav class="layout__navbar"></nav>
      <div class="layout__content"></div>
    </main>
  </section>
</template>

<script>
export default {
  create() {
    
  }
}
</script>
