<template>
  <section id="members" ref="sectionRef" class="section-padding relative z-10">
    <div class="container-custom">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-secondary-500/20 text-secondary-300 rounded-full text-sm font-medium mb-4">
          Our Team
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          组内成员
        </h2>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          认识我们优秀的团队成员
        </p>
      </div>
      
      <!-- Members Grid -->
      <div ref="membersGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="(member, index) in members" 
          :key="member.name"
          class="member-card group"
        >
          <!-- Card Container -->
          <div class="member-card-inner perspective-1000">
            <!-- Front of Card -->
            <div class="member-card-front glass-card p-6 text-center transition-all duration-500">
              <!-- Avatar -->
              <div class="relative mb-6">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all duration-300">
                  <img 
                    :src="member.avatar" 
                    :alt="`${member.name}的头像`"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    @error="handleImageError"
                  >
                </div>

              </div>
              
              <!-- Name -->
              <h3 class="text-xl font-bold text-white mb-2">{{ member.name }}</h3>
              <p class="text-white/60 text-sm mb-4">{{ member.nickname }}</p>
              
              <!-- Skills -->
              <div class="flex flex-wrap gap-2 justify-center mb-4">
                <span 
                  v-for="skill in member.skills.slice(0, 3)" 
                  :key="skill"
                  class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium"
                >
                  {{ skill }}
                </span>
                <span 
                  v-if="member.skills.length > 3"
                  class="px-3 py-1 bg-white/10 text-white/60 rounded-full text-xs"
                >
                  +{{ member.skills.length - 3 }}
                </span>
              </div>
              
              <!-- Hover Indicator -->
              <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                <div class="text-center">
                  <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 mx-auto">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p class="text-white font-medium text-sm">悬浮查看详情</p>
                  <p class="text-white/70 text-xs mt-1">移动端点击查看</p>
                </div>
              </div>
            </div>
            
            <!-- Back of Card -->
            <div class="member-card-back glass-card p-6 text-center transition-all duration-500 absolute inset-0">
              <!-- Back Content -->
              <div class="h-full flex flex-col justify-center">
                <!-- Avatar Small -->
                <div class="w-16 h-16 mx-auto rounded-full overflow-hidden mb-4 ring-2 ring-primary-500/30">
                  <img 
                    :src="member.avatar" 
                    :alt="`${member.name}的头像`"
                    class="w-full h-full object-cover"
                  >
                </div>
                
                <!-- Name -->
                <h3 class="text-lg font-bold text-white mb-3">{{ member.name }}</h3>
                
                <!-- Introduction -->
                <p class="text-white/80 text-sm leading-relaxed mb-4 flex-1">
                  {{ member.intro }}
                </p>
                
                <!-- All Skills -->
                <div class="flex flex-wrap gap-1 justify-center mb-4">
                  <span 
                    v-for="skill in member.skills" 
                    :key="skill"
                    class="px-2 py-1 bg-secondary-500/20 text-secondary-300 rounded text-xs"
                  >
                    {{ skill }}
                  </span>
                </div>
                
                <!-- GitHub Link -->
                <a 
                  :href="member.github" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center px-4 py-2 bg-gradient-primary text-white rounded-lg text-sm font-medium hover:shadow-glow transition-all duration-300 group/btn"
                  @click.stop
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                  <svg class="w-3 h-3 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
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
const membersGridRef = ref(null)

const { data } = useTeamData()
const { fadeInUp, scaleIn } = useAnimations()

const members = data.members

const handleImageError = (event) => {
  // 如果图片加载失败，使用默认头像
  event.target.src = 'https://via.placeholder.com/96x96/0052D9/FFFFFF?text=👤'
}

const initAnimations = () => {
  // 标题动画
  fadeInUp(headerRef.value, { duration: 1 })
  
  // 成员卡片动画
  scaleIn(membersGridRef.value.children, { 
    delay: 0.3, 
    stagger: 0.15,
    ease: 'back.out(1.7)'
  })
}

const initCardFlips = async () => {
  try {
    const { gsap } = await import('gsap')
    
    // 为每个卡片添加翻转动画
    const cards = membersGridRef.value?.querySelectorAll('.member-card')
    cards?.forEach(card => {
      const cardInner = card.querySelector('.member-card-inner')
      const cardFront = card.querySelector('.member-card-front')
      const cardBack = card.querySelector('.member-card-back')
      
      // 初始化卡片背面
      gsap.set(cardBack, { rotationY: 180 })
      
      let isFlipped = false
      
      const flipCard = () => {
        if (isFlipped) {
          // 翻回正面
          gsap.to(cardFront, { rotationY: 0, duration: 0.6, ease: 'power2.inOut' })
          gsap.to(cardBack, { rotationY: 180, duration: 0.6, ease: 'power2.inOut' })
        } else {
          // 翻到背面
          gsap.to(cardFront, { rotationY: -180, duration: 0.6, ease: 'power2.inOut' })
          gsap.to(cardBack, { rotationY: 0, duration: 0.6, ease: 'power2.inOut' })
        }
        isFlipped = !isFlipped
      }
      
      // 桌面端：鼠标悬停
      card.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 768 && !isFlipped) {
          flipCard()
        }
      })
      
      card.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 768 && isFlipped) {
          flipCard()
        }
      })
      
      // 移动端：点击切换
      card.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          flipCard()
        }
      })
    })
  } catch (error) {
    console.warn('卡片翻转动画初始化失败:', error)
  }
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
    setTimeout(initCardFlips, 1000)
  }, 100)
})
</script>

<style scoped>
.member-card {
  height: 320px;
  perspective: 1000px;
}

.member-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.member-card-front,
.member-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.member-card:hover .member-card-front,
.member-card:hover .member-card-back {
  border-color: rgba(0, 82, 217, 0.3);
}

.perspective-1000 {
  perspective: 1000px;
}

/* 响应式调整 */
@media (max-width: 767px) {
  .member-card {
    height: 300px;
  }
}

@media (min-width: 1280px) {
  .member-card {
    height: 340px;
  }
}

/* 渐变背景 */
.gradient-primary {
  background: linear-gradient(135deg, #0052D9 0%, #00A9FF 100%);
}
</style>
