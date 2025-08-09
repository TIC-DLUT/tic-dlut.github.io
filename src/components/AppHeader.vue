<template>
  <header 
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-card shadow-glow' : 'bg-transparent'
    ]"
  >
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 px-6">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="腾讯组 Logo" 
            class="h-10 w-auto transition-transform duration-300 hover:scale-110"
          >
          <span class="text-xl font-bold gradient-text hidden sm:block">
            腾讯组
          </span>
        </div>
        
        <!-- Navigation - Desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <a 
            v-for="item in navigation" 
            :key="item.href"
            :href="item.href" 
            @click="scrollToSection"
            class="text-white/80 hover:text-white transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg glass-card"
        >
          <div class="space-y-1.5">
            <div class="w-5 h-0.5 bg-white transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isMobileMenuOpen }"></div>
            <div class="w-5 h-0.5 bg-white transition-all duration-300" :class="{ 'opacity-0': isMobileMenuOpen }"></div>
            <div class="w-5 h-0.5 bg-white transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isMobileMenuOpen }"></div>
          </div>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <nav 
        :class="[
          'md:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        ]"
      >
        <div class="px-6 pb-4 space-y-3">
          <a 
            v-for="item in navigation" 
            :key="item.href"
            :href="item.href" 
            @click="scrollToSection"
            class="block text-white/80 hover:text-white transition-colors duration-300 font-medium py-2"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const headerRef = ref(null)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navigation = [
  { label: '首页', href: '#hero' },
  { label: '关于我们', href: '#introduction' },
  { label: '技术栈', href: '#tech-stack' },
  { label: '团队成员', href: '#members' },
  { label: '荣誉奖项', href: '#awards' },
  { label: '工作室风采', href: '#gallery' },
  { label: '加入我们', href: '#join-us' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (e) => {
  e.preventDefault()
  const href = e.target.getAttribute('href')
  const targetElement = document.querySelector(href)
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  // Close mobile menu
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.glass-card {
  backdrop-filter: blur(20px);
  background: rgba(10, 14, 39, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
