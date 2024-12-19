<template>
  <div class="logo">
    <div class="bg"></div>
    <video autoplay muted ref="video">
      <source src="/img/logo.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  methods: {
    play() {
      this.$refs.video.play()
    }
  }
}
</script>
