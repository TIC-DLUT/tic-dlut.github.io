<template>
  <section 
    id="hero"
    ref="heroRef" 
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Hero Content -->
    <div class="container-custom z-10 relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-8">
          <!-- Main Title -->
          <h1 ref="titleRef" class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="gradient-text">腾讯组</span>
            <br>
            <span ref="typewriterRef" class="text-white/90 text-2xl md:text-4xl lg:text-5xl font-medium">
              <span class="typewriter-text"></span>
              <span class="typewriter-cursor">|</span>
            </span>
          </h1>
          
          <!-- Subtitle -->
          <p ref="subtitleRef" class="text-xl md:text-2xl text-white/70 font-medium">
            大连理工大学开发区校区 · 腾讯高校创新俱乐部
          </p>
          
          <!-- Stats -->
          <div ref="statsRef" class="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            <div class="text-center">
              <div ref="memberCountRef" class="text-3xl md:text-4xl font-bold gradient-text" data-target="11">0</div>
              <div class="text-white/60 text-sm md:text-base">团队成员</div>
            </div>
            <div class="text-center">
              <div ref="awardCountRef" class="text-3xl md:text-4xl font-bold gradient-text" data-target="6">0</div>
              <div class="text-white/60 text-sm md:text-base">获奖项目</div>
            </div>
            <div class="text-center">
              <div ref="techCountRef" class="text-3xl md:text-4xl font-bold gradient-text" data-target="4">0</div>
              <div class="text-white/60 text-sm md:text-base">技术领域</div>
            </div>
          </div>
          
          <!-- CTA Buttons -->
          <div ref="ctaRef" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              @click="scrollToSection('#members')"
              class="btn-primary group"
            >
              <span>认识我们</span>
              <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              @click="scrollToSection('#join-us')"
              class="btn-secondary"
            >
              加入团队
            </button>
          </div>
        </div>
        
        <!-- Right Visual -->
        <div class="hidden lg:block relative">
          <!-- Floating Cards -->
          <div class="relative w-full h-96">
            <div 
              ref="techCardRef"
              class="absolute top-12 right-12 glass-card p-6 floating-animation"
              style="animation-delay: 0s"
            >
              <div class="text-4xl mb-2">⚡</div>
              <span class="text-white font-medium">全栈开发</span>
            </div>
            
            <div 
              ref="aiCardRef"
              class="absolute top-32 left-8 glass-card p-6 floating-animation"
              style="animation-delay: 1s"
            >
              <div class="text-4xl mb-2">🤖</div>
              <span class="text-white font-medium">AI创新</span>
            </div>
            
            <div 
              ref="mobileCardRef"
              class="absolute bottom-16 right-4 glass-card p-6 floating-animation"
              style="animation-delay: 2s"
            >
              <div class="text-4xl mb-2">📱</div>
              <span class="text-white font-medium">移动应用</span>
            </div>
          </div>
          
          <!-- Code Decoration -->
          <div ref="codeRef" class="mt-8 space-y-3">
            <div class="code-block">
              <span class="text-blue-400">const</span> 
              <span class="text-purple-300 ml-2">innovation</span> 
              <span class="text-white ml-2">=</span>
              <span class="text-green-300 ml-2">"unlimited"</span>
              <span class="text-white">;</span>
            </div>
            <div class="code-block">
              <span class="text-blue-400">function</span>
              <span class="text-yellow-300 ml-2">changeWorld</span>
              <span class="text-white">() {</span>
            </div>
            <div class="code-block ml-4">
              <span class="text-blue-400">return</span>
              <span class="text-green-300 ml-2">"腾讯组"</span>
              <span class="text-white">;</span>
            </div>
            <div class="code-block">
              <span class="text-white">}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div ref="scrollIndicatorRef" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
      <div class="w-px h-16 bg-gradient-to-b from-primary-500 to-transparent mx-auto mb-2"></div>
      <span class="text-white/60 text-sm">向下滚动探索更多</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAnimations } from '../composables/useAnimations.js'

const heroRef = ref(null)
const titleRef = ref(null)
const typewriterRef = ref(null)
const subtitleRef = ref(null)
const statsRef = ref(null)
const memberCountRef = ref(null)
const awardCountRef = ref(null)
const techCountRef = ref(null)
const ctaRef = ref(null)
const techCardRef = ref(null)
const aiCardRef = ref(null)
const mobileCardRef = ref(null)
const codeRef = ref(null)
const scrollIndicatorRef = ref(null)

const { animateCounter, fadeInUp, scaleIn, floatingAnimation } = useAnimations()

const scrollToSection = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// 打字机效果
const typewriterTexts = [
  "创新无界 · 代码改变世界",
  "构建未来 · 技术驱动梦想"
]

let currentTextIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typewriterTimeout = null

const typewriterEffect = () => {
  const textElement = typewriterRef.value?.querySelector('.typewriter-text')
  if (!textElement) return

  const currentText = typewriterTexts[currentTextIndex]
  
  if (isDeleting) {
    // 删除字符
    textElement.textContent = currentText.substring(0, currentCharIndex - 1)
    currentCharIndex--
    
    if (currentCharIndex === 0) {
      isDeleting = false
      currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length
      // 切换文本间的暂停时间
      typewriterTimeout = setTimeout(typewriterEffect, 800)
    } else {
      // 删除速度（快速）
      typewriterTimeout = setTimeout(typewriterEffect, 30)
    }
  } else {
    // 添加字符
    textElement.textContent = currentText.substring(0, currentCharIndex + 1)
    currentCharIndex++
    
    if (currentCharIndex === currentText.length) {
      // 完成当前文本，暂停后开始删除
      typewriterTimeout = setTimeout(() => {
        isDeleting = true
        typewriterEffect()
      }, 3000) // 显示完整文本的时间（3秒）
    } else {
      // 打字速度，加入随机性使其更自然
      const baseSpeed = 120
      const randomDelay = Math.random() * 50
      typewriterTimeout = setTimeout(typewriterEffect, baseSpeed + randomDelay)
    }
  }
}

const startTypewriter = () => {
  // 延迟启动打字效果
  setTimeout(() => {
    typewriterEffect()
  }, 1500)
}

const initAnimations = () => {
  // 主标题动画
  fadeInUp(titleRef.value, { duration: 1.2, delay: 0.3 })
  
  // 副标题动画
  fadeInUp(subtitleRef.value, { delay: 0.8 })
  
  // 统计数据动画
  fadeInUp(statsRef.value, { delay: 1.2 })
  
  // CTA按钮动画
  fadeInUp(ctaRef.value, { delay: 1.6 })
  
  // 浮动卡片动画
  scaleIn([techCardRef.value, aiCardRef.value, mobileCardRef.value], { 
    delay: 2, 
    stagger: 0.3 
  })
  
  // 代码块动画
  fadeInUp(codeRef.value, { delay: 2.5 })
  
  // 滚动指示器动画
  fadeInUp(scrollIndicatorRef.value, { delay: 3 })
  
  // 数字计数动画
  setTimeout(() => {
    animateCounter(memberCountRef.value, 11)
    animateCounter(awardCountRef.value, 6)  
    animateCounter(techCountRef.value, 4)
  }, 1500)
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
    startTypewriter()
  }, 100)
})

onUnmounted(() => {
  if (typewriterTimeout) {
    clearTimeout(typewriterTimeout)
  }
})
</script>

<style scoped>
.floating-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.code-block {
  @apply font-mono text-sm bg-dark-800/50 rounded-lg p-4 border border-white/10 backdrop-blur-sm;
}

/* 打字机效果样式 */
.typewriter-text {
  display: inline-block;
}

.typewriter-cursor {
  display: inline-block;
  animation: blink 1s infinite;
  margin-left: 2px;
  color: #00A9FF;
  font-weight: normal;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* 打字机容器样式 */
.typewriter-container {
  min-height: 1.2em;
  display: inline-block;
}
</style>
