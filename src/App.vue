<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
});
</script>

<style lang="stylus">
  #app
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    height: 100%
</style>
