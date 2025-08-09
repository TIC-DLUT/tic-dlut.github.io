<template>
  <section id="join-us" ref="sectionRef" class="section-padding relative z-10">
    <div class="container-custom">
      <!-- Section Header -->
      <div ref="headerRef" class="text-center mb-16">
        <span class="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-4">
          Join Us
        </span>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          加入我们
        </h2>
        <p class="text-lg text-white/70 max-w-2xl mx-auto">
          一起创造更美好的未来
        </p>
      </div>
      
      <!-- Join Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
        <!-- Left Content: Benefits -->
        <div ref="benefitsRef" class="space-y-8 flex flex-col">
          <div>
            <h3 class="text-2xl font-bold text-white mb-6">
              为什么选择腾讯组？
            </h3>
            <div class="space-y-4">
              <div 
                v-for="(benefit, index) in benefits" 
                :key="index"
                class="benefit-item group flex items-start space-x-4 p-4 rounded-xl glass-card hover:shadow-glow transition-all duration-300"
              >
                <!-- Icon -->
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span class="text-2xl">{{ benefit.icon }}</span>
                </div>
                
                <!-- Content -->
                <div class="flex-1">
                  <p class="text-white/90 font-medium group-hover:text-white transition-colors duration-300">
                    {{ benefit.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Additional Info -->
          <div class="glass-card p-6 flex-1 flex flex-col justify-center">
            <h4 class="text-lg font-bold text-white mb-3">
              我们期待这样的你：
            </h4>
            <ul class="space-y-2 text-white/80">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                对编程和技术有浓厚兴趣
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                有良好的学习能力和团队合作精神
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                愿意挑战自己，追求卓越
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                有创新思维和实践能力
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Right Content: QR Code -->
        <div ref="qrRef" class="flex items-stretch">
          <div class="w-full relative">
            <!-- QR Code Container -->
            <div class="qr-container glass-card p-12 hover:shadow-glow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col justify-center" @click="openQRLightbox">
              <!-- QR Code Image -->
              <div class="relative mb-8 flex-shrink-0">
                <img 
                  ref="qrImageRef"
                  :src="joinUsData.qrCode" 
                  :alt="joinUsData.title"
                  class="w-48 h-48 mx-auto rounded-2xl shadow-glow group-hover:scale-105 transition-transform duration-300"
                >
                
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- QR Code Title -->
              <h3 class="text-xl font-bold text-white mb-3">
                {{ joinUsData.title }}
              </h3>
              
              <!-- Instructions -->
              <p class="text-white/70 text-base mb-4">
                使用微信或QQ扫描二维码
              </p>
              
              <!-- Click Hint -->
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-primary-300 text-sm font-medium">
                  点击放大查看
                </p>
              </div>
            </div>
            
            <!-- Floating Elements -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-primary-500/30 rounded-full animate-ping"></div>
            <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-secondary-500/30 rounded-full animate-ping" style="animation-delay: 1s;"></div>
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
const benefitsRef = ref(null)
const qrRef = ref(null)
const qrImageRef = ref(null)

const { data } = useTeamData()
const { fadeInUp, scaleIn } = useAnimations()

const joinUsData = data.joinUs
const benefits = data.joinUs.benefits

let qrLightbox = null

const openQRLightbox = async () => {
  try {
    console.log('打开二维码lightbox:', joinUsData.qrCode)
    
    // 动态导入GLightbox
    const { default: GLightbox } = await import('glightbox')
    
    // 如果已有实例，先销毁
    if (qrLightbox) {
      qrLightbox.destroy()
      qrLightbox = null
    }
    
    // 创建新的lightbox实例
    qrLightbox = GLightbox({
      elements: [{
        href: joinUsData.qrCode,
        type: 'image',
        title: joinUsData.title,
        description: '扫描二维码加入我们的QQ群，获取最新招新信息和技术交流'
      }],
      touchNavigation: true,
      zoomable: true,
      draggable: true,
      openEffect: 'zoom',
      closeEffect: 'fade',
      skin: 'clean',
      closeButton: true
    })
    
    console.log('二维码lightbox实例创建成功:', qrLightbox)
    qrLightbox.open()
  } catch (error) {
    console.error('二维码lightbox打开失败:', error)
    // 降级方案：在新窗口打开图片
    window.open(joinUsData.qrCode, '_blank')
  }
}

const initAnimations = () => {
  // 标题动画
  fadeInUp(headerRef.value, { duration: 1 })
  
  // 好处列表动画
  fadeInUp(benefitsRef.value, { delay: 0.3, duration: 1 })
  
  // 二维码区域动画
  scaleIn(qrRef.value, { 
    delay: 0.6, 
    duration: 1,
    ease: 'back.out(1.7)'
  })
}

const initBenefitAnimations = async () => {
  try {
    const { gsap } = await import('gsap')
    
    // 好处项目的交错动画
    const benefitItems = benefitsRef.value?.querySelectorAll('.benefit-item')
    benefitItems?.forEach((item, index) => {
      gsap.fromTo(item,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.8 + index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
    
    // 二维码浮动动画
    gsap.to(qrImageRef.value, {
      y: -10,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    })
  } catch (error) {
    console.warn('好处动画初始化失败:', error)
  }
}

onMounted(() => {
  setTimeout(() => {
    initAnimations()
    initBenefitAnimations()
  }, 100)
})
</script>

<style scoped>
.benefit-item {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.benefit-item:hover {
  border-color: rgba(0, 82, 217, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.qr-container {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.qr-container:hover {
  border-color: rgba(0, 82, 217, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.gradient-primary {
  background: linear-gradient(135deg, #0052D9 0%, #00A9FF 100%);
}

/* 自定义动画 */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.floating-animation {
  animation: float 6s ease-in-out infinite;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
  
  .qr-container {
    height: auto !important;
  }
}

@media (max-width: 768px) {
  .qr-container {
    padding: 2rem !important;
  }
  
  .qr-container img {
    width: 180px !important;
    height: 180px !important;
  }
  
  .qr-container h3 {
    font-size: 1.125rem !important;
  }
  
  .qr-container p {
    font-size: 0.875rem !important;
  }
}

@media (max-width: 640px) {
  .qr-container img {
    width: 160px !important;
    height: 160px !important;
  }
}

/* GLightbox 样式覆盖 */
:global(.glightbox-clean .gslide-description) {
  background: rgba(10, 14, 39, 0.9) !important;
  backdrop-filter: blur(20px) !important;
}

:global(.glightbox-clean .gdesc-inner) {
  color: white !important;
}

:global(.glightbox-clean .gslide-title) {
  color: #00A9FF !important;
  font-weight: 600 !important;
}
</style>
