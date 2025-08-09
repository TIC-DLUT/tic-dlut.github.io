<template>
  <section id="awards" ref="sectionRef" class="section-padding relative z-10">
    <div class="container-custom">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium mb-4">
          Achievements
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          荣誉奖项
        </h2>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          我们在各大竞赛中的出色表现
        </p>
      </div>
      
      <!-- Timeline Container -->
      <div ref="timelineRef" class="relative max-w-4xl mx-auto">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30"></div>
        
        <!-- Timeline Items -->
        <div 
          v-for="(award, index) in awards" 
          :key="index"
          :class="[
            'timeline-item relative mb-12 last:mb-0',
            index % 2 === 0 ? 'left-item' : 'right-item'
          ]"
        >
          <!-- Timeline Dot -->
          <div :class="[
            'timeline-dot absolute w-6 h-6 bg-gradient-primary rounded-full border-4 border-dark-900 z-10',
            'top-1/2 transform -translate-y-1/2',
            index % 2 === 0 ? 'right-[-12px]' : 'left-[-12px]'
          ]">
            <div class="absolute inset-1 bg-white rounded-full opacity-0 animate-pulse-slow"></div>
          </div>
          
          <!-- Award Card -->
          <div :class="[
            'award-card glass-card p-6 max-w-md',
            index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
          ]">
            <!-- Award Icon -->
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <span class="text-2xl">🏆</span>
              </div>
              <div class="flex-1">
                <div class="text-sm text-primary-300 font-medium">获奖荣誉</div>
                <div class="text-xs text-white/60">{{ getAwardYear(award) }}</div>
              </div>
            </div>
            
            <!-- Award Title -->
            <h3 class="text-lg font-bold text-white mb-3 leading-relaxed">
              {{ award }}
            </h3>
            
            <!-- Award Badge -->
            <div class="flex items-center">
              <span :class="[
                'px-3 py-1 rounded-full text-xs font-medium',
                getAwardBadgeClass(award)
              ]">
                {{ getAwardLevel(award) }}
              </span>
              <div class="ml-auto">
                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            
            <!-- Hover Effect -->
            <div class="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      <!-- Summary Stats -->
      <div ref="summaryRef" class="mt-20">
        <div class="glass-card p-8 text-center max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-6 gradient-text">
            获奖统计
          </h3>
          <div class="grid grid-cols-3 gap-6">
            <div class="text-center">
              <div ref="totalCountRef" class="text-3xl font-bold text-white mb-2" data-target="6">0</div>
              <div class="text-white/60 text-sm">总获奖数</div>
            </div>
            <div class="text-center">
              <div ref="nationalCountRef" class="text-3xl font-bold text-yellow-400 mb-2" data-target="2">0</div>
              <div class="text-white/60 text-sm">国家级奖项</div>
            </div>
            <div class="text-center">
              <div ref="clubCountRef" class="text-3xl font-bold text-green-400 mb-2" data-target="3">0</div>
              <div class="text-white/60 text-sm">俱乐部荣誉</div>
            </div>
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
const timelineRef = ref(null)
const summaryRef = ref(null)
const totalCountRef = ref(null)
const nationalCountRef = ref(null)
const clubCountRef = ref(null)

const { data } = useTeamData()
const { fadeInUp, animateCounter } = useAnimations()

const awards = data.awards

const getAwardYear = (award) => {
  // 从奖项名称中提取年份
  const yearMatch = award.match(/\d{4}/)
  return yearMatch ? yearMatch[0] : '2024'
}

const getAwardLevel = (award) => {
  if (award.includes('国奖') || award.includes('国家级')) {
    return '国家级'
  } else if (award.includes('省奖') || award.includes('省级')) {
    return '省级'
  } else if (award.includes('俱乐部') || award.includes('年度')) {
    return '俱乐部'
  }
  return '其他'
}

const getAwardBadgeClass = (award) => {
  const level = getAwardLevel(award)
  switch (level) {
    case '国家级':
      return 'bg-yellow-500/20 text-yellow-300'
    case '省级':
      return 'bg-blue-500/20 text-blue-300'
    case '俱乐部':
      return 'bg-green-500/20 text-green-300'
    default:
      return 'bg-purple-500/20 text-purple-300'
  }
}

const initAnimations = () => {
  // 标题动画
  fadeInUp(headerRef.value, { duration: 1 })
  
  // 时间线项目动画
  const timelineItems = timelineRef.value?.querySelectorAll('.timeline-item')
  timelineItems?.forEach((item, index) => {
    fadeInUp(item, { 
      delay: 0.3 + index * 0.2,
      duration: 0.8
    })
  })
  
  // 总结统计动画
  fadeInUp(summaryRef.value, { delay: 1 })
  
  // 数字计数动画
  setTimeout(() => {
    animateCounter(totalCountRef.value, 6)
    animateCounter(nationalCountRef.value, 2)
    animateCounter(clubCountRef.value, 3)
  }, 2000)
}

const initTimelineAnimations = async () => {
  try {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    
    gsap.registerPlugin(ScrollTrigger)
    
    // 时间线动画
    const timelineDots = timelineRef.value?.querySelectorAll('.timeline-dot')
    timelineDots?.forEach((dot, index) => {
      gsap.fromTo(dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: dot,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
    
    // 奖项卡片悬停效果
    const awardCards = timelineRef.value?.querySelectorAll('.award-card')
    awardCards?.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })
  } catch (error) {
    console.warn('时间线动画初始化失败:', error)
  }
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
    initTimelineAnimations()
  }, 100)
})
</script>

<style scoped>
.timeline-item {
  position: relative;
}

.left-item {
  text-align: right;
}

.right-item {
  text-align: left;
}

.timeline-dot {
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.left-item .timeline-dot {
  right: -12px;
  left: auto;
  transform: translateX(50%) translateY(-50%);
}

.right-item .timeline-dot {
  left: -12px;
  right: auto;
  transform: translateX(-50%) translateY(-50%);
}

.award-card {
  position: relative;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.award-card:hover {
  border-color: rgba(255, 107, 107, 0.3);
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.2);
}

.gradient-primary {
  background: linear-gradient(135deg, #0052D9 0%, #00A9FF 100%);
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .timeline-item {
    text-align: center !important;
  }
  
  .left-item .award-card,
  .right-item .award-card {
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 320px;
  }
  
  .timeline-dot {
    left: 50% !important;
    right: auto !important;
    transform: translateX(-50%) translateY(-50%) !important;
  }
}
</style>
