<template>
  <div ref="top"></div>
  <Logo ref="logo" />
  <div class="txt">
    <div class="c">
      <Projects />
      <Rutube @cancel="scrollTop" />
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
import Rutube from "./Rutube.vue"
import Projects from "./Projects.vue"
import Logo from "./Logo.vue"

export default {
  components: {Logo, Projects, Rutube},
  methods: {
    scrollTop() {
      this.$smoothScroll({
        scrollTo: this.$refs.top,
        duration: 1000
      })
      setTimeout(() => {
        this.$refs.logo.play()
      }, 1000)
    }
  }
}
</script>

<style src="../assets/css/main.sass"></style>

