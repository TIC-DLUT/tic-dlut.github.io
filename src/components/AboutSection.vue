<template>
  <section id="introduction" ref="sectionRef" class="section-padding relative z-10">
    <div class="container-custom">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-4">
          About Us
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          关于我们
        </h2>
      </div>
      
      <!-- Introduction Content -->
      <div class="max-w-4xl mx-auto">
        <!-- Main Introduction Text -->
        <div ref="introTextRef" class="text-center mb-16">
          <p class="text-lg md:text-xl text-white/80 leading-relaxed">
            {{ introduction }}
          </p>
        </div>
        
        <!-- Highlights Grid -->
        <div ref="highlightsRef" class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(highlight, index) in highlights" 
            :key="index"
            class="highlight-card glass-card p-8 text-center hover:shadow-glow transition-all duration-300 group cursor-pointer"
          >
            <!-- Icon -->
            <div class="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {{ highlight.icon }}
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold mb-4 text-white group-hover:text-primary-300 transition-colors">
              {{ highlight.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-white/70 leading-relaxed">
              {{ highlight.description }}
            </p>
          </div>
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
const introTextRef = ref(null)
const highlightsRef = ref(null)

const { data } = useTeamData()
const { fadeInUp, scaleIn, addHoverEffect } = useAnimations()

const introduction = data.introduction

const highlights = [
  {
    icon: '🚀',
    title: '创新驱动',
    description: '专注前沿技术探索与实践，推动技术创新发展'
  },
  {
    icon: '🏆',
    title: '屡获佳绩',
    description: '多项国家级大赛获奖经历，展现卓越实力'
  },
  {
    icon: '🌟',
    title: '团队协作',
    description: '多元化背景的优秀团队，共同成长进步'
  }
]

const initAnimations = () => {
  // 标题动画
  fadeInUp(headerRef.value, { duration: 1 })
  
  // 介绍文本动画
  fadeInUp(introTextRef.value, { delay: 0.3, duration: 1 })
  
  // 亮点卡片动画
  scaleIn(highlightsRef.value.children, { 
    delay: 0.6, 
    stagger: 0.2,
    ease: 'back.out(1.7)'
  })
  
  // 添加悬停效果
  setTimeout(() => {
    const cards = highlightsRef.value?.querySelectorAll('.highlight-card')
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
.highlight-card {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.highlight-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 82, 217, 0.3);
}
</style>
