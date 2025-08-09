<template>
  <section id="tech-stack" ref="sectionRef" class="section-padding relative z-10">
    <div class="container-custom">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-secondary-500/20 text-secondary-300 rounded-full text-sm font-medium mb-4">
          Tech Stack
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          技术栈
        </h2>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          我们掌握的前沿技术和工具
        </p>
      </div>
      
      <!-- Tech Stack Grid -->
      <div ref="techGridRef" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(technologies, category) in techStack" 
          :key="category"
          class="tech-card glass-card p-6 hover:shadow-glow transition-all duration-300 group"
        >
          <!-- Category Icon -->
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mr-4">
              <span class="text-2xl">{{ getCategoryIcon(category) }}</span>
            </div>
            <h3 class="text-xl font-bold text-white">{{ category }}</h3>
          </div>
          
          <!-- Technology Tags -->
          <div class="space-y-3">
            <div 
              v-for="tech in technologies" 
              :key="tech"
              class="tech-tag inline-block bg-white/10 text-white/90 px-3 py-2 rounded-lg text-sm font-medium mr-2 mb-2 hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-300"
            >
              {{ tech }}
            </div>
          </div>
          
          <!-- Hover Effect Overlay -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div ref="infoRef" class="mt-16 text-center">
        <div class="glass-card p-8 max-w-4xl mx-auto">
          <h3 class="text-2xl font-bold mb-4 gradient-text">
            持续学习，拥抱变化
          </h3>
          <p class="text-white/70 text-lg leading-relaxed">
            我们时刻关注技术发展趋势，积极学习新技术，不断提升团队技术能力。
            从传统开发到AI时代，我们始终走在技术前沿。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTeamData } from '../composables/useTeamData.js'
import { useAnimations } from '../composables/useAnimations.js'

const sectionRef = ref(null)
const headerRef = ref(null)
const techGridRef = ref(null)
const infoRef = ref(null)

const { data } = useTeamData()
const { fadeInUp, scaleIn, addHoverEffect } = useAnimations()

const techStack = data.techStack

const getCategoryIcon = (category) => {
  const icons = {
    '后端': '⚙️',
    '前端': '🎨',
    '客户端': '📱',
    '大模型': '🤖'
  }
  return icons[category] || '💻'
}

const initAnimations = () => {
  // 标题动画
  fadeInUp(headerRef.value, { duration: 1 })
  
  // 技术栈卡片动画
  scaleIn(techGridRef.value.children, { 
    delay: 0.3, 
    stagger: 0.2,
    ease: 'back.out(1.7)'
  })
  
  // 附加信息动画
  fadeInUp(infoRef.value, { delay: 1 })
  
  // 添加悬停效果
  setTimeout(() => {
    const cards = techGridRef.value?.querySelectorAll('.tech-card')
    cards?.forEach(card => {
      addHoverEffect(card, { scale: 1.05 })
    })
  }, 1000)
}

onMounted(() => {
  setTimeout(initAnimations, 100)
})
</script>

<style scoped>
.tech-card {
  position: relative;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.tech-card:hover {
  border-color: rgba(0, 82, 217, 0.3);
  transform: translateY(-5px);
}

.tech-tag {
  transition: all 0.3s ease;
  display: inline-block;
}

.tech-tag:hover {
  transform: translateY(-2px);
}

.gradient-primary {
  background: linear-gradient(135deg, #0052D9 0%, #00A9FF 100%);
}
</style>
