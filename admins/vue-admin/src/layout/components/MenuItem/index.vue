<template>
  <span>
    <i class="el-icon-location" />
    <span v-if="!collapse">控制台</span>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      collapse: 'app/collapse'
    })
  }
}
</script>

<style>

</style>
