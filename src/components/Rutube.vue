<template>
  <div class="rutube" ref="rutube">
    <ul :class="{ hide: hideRutubeInitLink, remove: removeRutubeInitLink }">
      <li>
        <span>
          <a href="https://rutube.ru/channel/46659124/" target="_blank" @click.prevent="scrollToRutube">
            <img src="/img/media/rutube.png"></a></span>
        <span>
          <a href="https://rutube.ru/channel/46659124/" target="_blank" @click.prevent="scrollToRutube">Rutube</a> —<br>
          Канал веб-разработчика.<br>Обзоры своих и чужих проектов
        </span>
      </li>
    </ul>
    <div class="video-list" :class="{
      display_: displayThumbs,
      show: showThumbs
    }">
      <div class="title">Прогулки по веб-студиям Рейтингa Рунета <a href="#" @click.prevent="cancel">назад</a></div>
      <swiper
          :slides-per-view="3"
          :space-between="0"
          ref="swiper"
      >
        <swiper-slide
            v-for="v in rutube"
            :key="v.id"
            @click="showVideo(v.id)"
            :class="{ selected: v.id === id, isSah: v.isSah}"
        >{{ v.title }}</swiper-slide>
      </swiper>
    </div>
    <div class="video" :class="{ show: isShowVideo }" v-if="videoId">
      <iframe
          width="100%"
          :src="'https://rutube.ru/play/embed/' + videoId"
          allow="clipboard-write; auto play"
          allowFullScreen>
      </iframe>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import rutube from "./rutube.js";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      hideRutubeInitLink: false,
      removeRutubeInitLink: false,
      displayThumbs: false,
      showThumbs: false,
      isShowVideo: false,
      videoId: null
      //showVideoList: false
    }
  },
  computed: {
    rutube() {
      return rutube()
    },
    id() {
      return this.$route.params.id
    },
    rutubeOpen() {
      return this.$route.name === 'rutube-open'
    },
    isSah() {
      return true
    }
  },
  methods: {
    cancel() {
      this.isShowVideo = false
      setTimeout(() => {
        this.showThumbs = false
        setTimeout(() => {
          this.displayThumbs = false
          this.removeRutubeInitLink = false
          this.hideRutubeInitLink = false
          this.$emit('cancel')
          this.$router.push('/')
        }, 1000)
      }, this.isShowVideo ? 1000 : 100)
    },
    scrollToRutube() {
      this.$smoothScroll({
        scrollTo: this.$refs.rutube,
        duration: 1000
      })
      setTimeout(() => {
        this.hideRutubeInitLink = true
        setTimeout(() => {
          this.removeRutubeInitLink = true
          this.displayThumbs = true
          this.showThumbs = true
        }, 1000)
      }, 500)
    },
    showVideo(id) {
      this.isShowVideo = true
      this.videoId = id
      this.$router.push('/rutube/' + id)
    }
  },
  mounted() {
    if (this.rutubeOpen) {
      this.scrollToRutube()
      setTimeout(() => {
        this.showVideo(this.rutube[0].id)
      }, 2000)
    }
    if (this.id) {
      this.scrollToRutube()
      setTimeout(() => {
        this.showVideo(this.id)
      }, 2000)
    }
  }
}
</script>

<style src="../assets/css/rutube.sass"></style>
