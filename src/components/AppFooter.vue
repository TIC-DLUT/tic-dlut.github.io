<template>
  <footer ref="footerRef" class="relative z-10 bg-dark-950/80 backdrop-blur-sm border-t border-white/10">
    <div class="container-custom py-8">
      <div class="text-center">
        <!-- Logo and Title -->
        <div class="flex items-center justify-center space-x-3 mb-4">
          <img 
            src="/logo.png" 
            alt="腾讯组 Logo" 
            class="h-8 w-auto"
          >
          <span class="text-lg font-bold gradient-text">
            腾讯组
          </span>
        </div>
        
        <!-- Copyright -->
        <p class="text-white/60 text-sm">
          &copy; 2025 腾讯高校创新俱乐部 - 大连理工大学开发区校区. All Rights Reserved.
        </p>
        
        <!-- Additional Info -->
        <div class="mt-4 flex items-center justify-center space-x-6 text-xs text-white/40">
          <span>Built with Vue 3 + Vite</span>
          <span>•</span>
          <span>Styled with Tailwind CSS</span>
          <span>•</span>
          <span>Animated with GSAP</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAnimations } from '../composables/useAnimations.js'

const footerRef = ref(null)
const { fadeInUp } = useAnimations()

const initAnimations = () => {
  fadeInUp(footerRef.value, { 
    delay: 0.2,
    duration: 0.8
  })
}

onMounted(() => {
  setTimeout(initAnimations, 100)
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #0052D9 0%, #00A9FF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
